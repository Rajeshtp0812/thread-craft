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
import { productAllotmentServices } from './productAllotment.service';
import { createProductAllotmentDto } from 'src/dtos/productAllotment/create.dto';
import { updateProductAllotmentDto } from 'src/dtos/productAllotment/update.dto';
import { productAllotment } from 'src/entity/productAllotment.entity';
import { ApiTags } from '@nestjs/swagger'

@ApiTags('Product Allotment')

@Controller('productAllotment')
export class productAllotmentController {

  constructor(private productAllotmentServices: productAllotmentServices) { }

  @Get(':id')
  async getOneAllotedProduct(@Param('id', ParseIntPipe) id: number): Promise<productAllotment> {
    return await this.productAllotmentServices.getAllotedProduct(id);
  }

  @Get()

  async getproductAllotment(@Query("companyId", ParseIntPipe) companyId: number) {
    return await this.productAllotmentServices.getAllotedProducts(companyId);
  }

  @Post()
  async create(@Query("companyId", ParseIntPipe) companyId: number, @Body() data: createProductAllotmentDto) {
    data['company'] = companyId;
    return await this.productAllotmentServices.createAllotedProduct(data);
  }

  @Put(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() data: Partial<updateProductAllotmentDto>) {
    return await this.productAllotmentServices.updateAllotedProduct(id, data);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return await this.productAllotmentServices.deleteAllotedProduct(id)
  }

}

