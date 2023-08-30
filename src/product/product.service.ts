import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { updateProductDto } from 'src/dtos/product/update.dto';
import { product } from 'src/entity/product.entity';
import { Repository } from 'typeorm';
import { v2 } from 'cloudinary';

@Injectable()
export class productServices {
  constructor(
    @InjectRepository(product) private readonly product: Repository<product>,
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

  async createProduct( file, data) {
    try {
      // const {url,product_id} = await v2.uploader.upload(image.path, { folder: 'newImage' });
 
      
    return await this.product.save({ ...data, image:file.originalname });
    } catch (err) {
      throw err;
    }
  }

  async updateProduct(id: number, data: Partial<updateProductDto>, file,product_id:string) {
    try {
      const image = await v2.uploader
        .upload(file.path, {
          folder: 'images',
        })
        .then((res) => res.url);
      await v2.api
        .delete_resources([`${product_id}`], {
          type: 'upload',
          resource_type: 'image',
        })
        .then((res) => res.data);
      return this.product.update({ productId: id }, { ...data, image });
    } catch (err) {
      throw err;
    }
  }

  async deleteProduct(id: number, product_id: string) {
    try {
       await v2.api
        .delete_resources([`${product_id}`], {
          type: 'upload',
          resource_type: 'image',
        })
        .then((res) => console.log(res));
   return await this.product.delete({ productId: id });
    } catch (err) {
      throw err;
    }
  }
}
