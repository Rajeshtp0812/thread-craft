import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { updateProductDto } from 'src/dtos/product/update.dto';
import { product } from 'src/entity/product.entity';
import { Repository } from 'typeorm';


@Injectable()
export class productServices {
  constructor(
    @InjectRepository(product) private readonly product: Repository<product>,
  ) { }

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
        (product) => product.company.companyId === companyId,
      );
    } catch (err) {
      throw err;
    }
  }

  async createProduct(file, data) {
    try {
      if (file?.filename) {
        return await this.product.save({ ...data, image: `https://backend.services.sabafashion.in/product/uploads/${file.filename}` });
      }
      return await this.product.save({ ...data, image: '' });
    } catch (err) {
      throw err;
    }
  }

  async updateProduct(id: number, data: Partial<updateProductDto>, file) {
    try {
      if (file?.filename) {
        return this.product.update({ productId: id }, { ...data, image: `https://backend.services.sabafashion.in/product/uploads/${file?.filename}` });
      }
      return this.product.update({ productId: id }, { ...data });
    } catch (err) {
      throw err;
    }
  }

  async deleteProduct(id: number) {
    try {
      return await this.product.delete({ productId: id });
    } catch (err) {
      throw err;
    }
  }

   
}
