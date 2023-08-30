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
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { productServices } from './product.service';
import { updateProductDto } from 'src/dtos/product/update.dto';
import { Product } from 'src/entity/product.entity';
import { createProductDto } from 'src/dtos/product/create.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { storage } from './storage.config';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('product')
@Controller('product')
export class productController {
  constructor(private productServices: productServices) { }

  @Get(':id')
  async getProduct(@Param('id', ParseIntPipe) id: number): Promise<Product> {
    return await this.productServices.getProduct(id);
  }

  @Get()
  async getProducts(@Query('companyId', ParseIntPipe) companyId: number) {
    return await this.productServices.getProducts(companyId);
  }

  @Put(':id')
  @UseInterceptors(FileInterceptor('image', { storage }))
  async update(
    @UploadedFile() file: Express.Multer.File,
    @Param('id', ParseIntPipe) id: number,
    @Body() data: updateProductDto,
  ) {
    return await this.productServices.updateProduct(id, data, file);
  }

  @Delete(':id')
  async delete(
    @Param('id', ParseIntPipe) id: number,
    @Body() imageUrl: string,
  ) {
    return this.productServices.deleteProduct(id, imageUrl);
  }

  @Post()
  @UseInterceptors(FileInterceptor('image', { storage }))
  async createProduct(
    @UploadedFile() file: Express.Multer.File,
    @Body() data: createProductDto,
    @Query('companyId', ParseIntPipe) companyId: number,
  ) {
    return await this.productServices.createProduct(file, {
      ...data,
      company: companyId,
    });
  }
}
