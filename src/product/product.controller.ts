import {
  Body,
  Controller,
  Param,
  ParseIntPipe,
  Post,
  Get,

  Put,
  Delete,
  Query,
} from '@nestjs/common';
import { productServices } from './product.service';
import { updateProductDto } from 'src/dtos/product/update.dto';
import { product } from 'src/entity/product.entity';
import { createProductDto } from 'src/dtos/product/create.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Product')
@Controller('product')
export class productController {

  constructor(private productServices: productServices) { }

  @Get(':productId')
  async getProduct(@Param('productId', ParseIntPipe) id: number): Promise<product> {
    return await this.productServices.getProduct(id);
  }

  @Get()
  async getProducts(@Query('companyId', ParseIntPipe) companyId: number) {
    return await this.productServices.getProducts(companyId);
  }

  @Post()
  async create(@Body() data: createProductDto, @Query('companyId', ParseIntPipe) companyId: number) {
    return await this.productServices.createProduct(data, companyId);
  }

  @Put(':productId')
  async update(@Param('productId', ParseIntPipe) id: number, @Body() data: updateProductDto) {
    return await this.productServices.updateProduct(id, data);
  }

  @Delete(':productId')
  async delete(@Param('productId', ParseIntPipe) id: number) {
    return this.productServices.deleteProduct(id)
  }
}
