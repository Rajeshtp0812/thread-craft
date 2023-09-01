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
  Res,
} from '@nestjs/common';
import { productServices } from './product.service';
import { updateProductDto } from 'src/dtos/product/update.dto';
import { product } from 'src/entity/product.entity';
import { createProductDto } from 'src/dtos/product/create.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { storage } from './storage.config';
import { ApiTags } from '@nestjs/swagger';
import { Public } from 'src/auth/public.decorator';
import { unlink } from 'fs'

@ApiTags('product')
@Controller('product')
export class productController {

  constructor(private productServices: productServices) { }

  @Get(':id')
  async getProduct(@Param('id', ParseIntPipe) id: number): Promise<product> {
    return await this.productServices.getProduct(id);
  }

  @Get()
  async getProducts(@Query('companyId', ParseIntPipe) companyId: number) {
    return await this.productServices.getProducts(companyId);
  }

  @Put('/:id')
  @UseInterceptors(FileInterceptor('image', { storage }))
  async update(
    @UploadedFile() file: Express.Multer.File,
    @Param('id', ParseIntPipe) id: number,
    @Body() data: updateProductDto,
  ) {

    const { image } = await this.productServices.getProduct(id);
    unlink(`uploads/${image}`, (err) => {
      if (err) {
        return
      }

    })
    return await this.productServices.updateProduct(id, data, file);
  }

  @Delete('/:id')
  async delete(
    @Param('id', ParseIntPipe) id: number
  ) {

    const { image } = await this.productServices.getProduct(id);
    unlink(`uploads/${image}`, (err) => {
      if (err) {
        return
      }

    })
    return this.productServices.deleteProduct(id);
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

  @Get('uploads/:fileId')
  @Public()
  async serveAvatar(@Param('fileId') fileId: string, @Res() res): Promise<any> {
    res.sendFile(fileId, { root: 'uploads' });
  }
}
