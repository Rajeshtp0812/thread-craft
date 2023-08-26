import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { updateProductDto } from 'src/dtos/product/update.dto';
import { product } from 'src/entity/product.entity';
import { Repository } from 'typeorm';
import { v2 } from 'cloudinary';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class productServices {
  constructor(
    @InjectRepository(product) private readonly product: Repository<product>,

    private configService: ConfigService,
  ) {}

  async getProduct(id: number) {
    try {
      return await this.product.findOne({
        where: {
          productId: id,
        },
        relations: ['company'],
      });
    } catch (err) {
      throw err;
    }
  }

  async getProducts(companyId: number): Promise<product[]> {
    try {
      return (await this.product.find({ relations: ['company'] })).filter(
        (client) => client.company.companyId === companyId,
      );
    } catch (err) {
      throw err;
    }
  }

  async createProduct(file, data) {
    try {
      const image = await v2.uploader
        .upload(file.path, { public_id: 'image12', folder: 'images' })
        .then((res) => res.url);

      return await this.product.save({ ...data, image });
    } catch (err) {
      throw err;
    }
  }

  async updateProduct(id: number, data: Partial<updateProductDto>, file) {
    try {
      const image = await v2.uploader
        .upload(file.path, { public_id: 'image12', folder: 'images' })
        .then((res) => res.url);
       await v2.uploader.destroy("").then(res=>res.data)
      return this.product.update({ productId: id }, {...data,image});
    } catch (err) {
      throw err;
    }
  }

  async deleteProduct(id: number, imageUrl: string) {
    try {
      await v2.uploader.destroy('v1692524817').then((res) => console.log(res));
      return await this.product.delete({ productId: id });
    } catch (err) {
      throw err;
    }
  }
}
