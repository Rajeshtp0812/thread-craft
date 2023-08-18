import {
  Injectable,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { updateProductDto } from 'src/dtos/product/update.dto';
import { product } from 'src/entity/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class productServices {

  constructor(@InjectRepository(product) private readonly product: Repository<product>) { }

  async getProduct(id: number) {
    try {
      return await this.product.findOne({
        where: {
          productId: id
        }, relations: ['company']
      });
    } catch (err) {
      throw (err);
    }

  }

  async getProducts(companyId: number): Promise<product[]> {
    try {
      return (await this.product.find({ relations: ["company"] })).filter(client => client.company.companyId === companyId);
    } catch (err) {
      throw (err);
    }

  }

  async createProduct(data, companyId) {
    try {
      data['company'] = companyId;
      console.log(data)
      return await this.product.save(data);
    } catch (err) {
      console.log(err)
      throw (err);
    }

  }

  async updateProduct(id: number, data: Partial<updateProductDto>) {
    try {
      return this.product.update({ productId: id }, data);
    } catch (err) {
      throw (err);
    }

  }

  async deleteProduct(id: number) {
    try {
      return await this.product.delete({ productId: id });
    } catch (err) {
      throw (err);
    }

  }
}
