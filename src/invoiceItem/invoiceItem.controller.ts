import {
  Body,
  Controller,
  Param,
  ParseIntPipe,
  Post,
  Get,
  UsePipes,
  ValidationPipe,
  Put,
  Delete,
  Query,
} from '@nestjs/common';
import { invoiceItemServices } from './invoiceItem.service';
import { updateInvoiceItemDto } from 'src/dtos/invoiceItem/update.dto';
import { invoiceItems } from 'src/entity/invoiceItems';
import { createInvoiceItemDto } from 'src/dtos/invoiceItem/create.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('invoiceItem')
@Controller('invoiceItem')
export class invoiceItemController {

  constructor(private invoiceItemServices: invoiceItemServices) { }

  @Get(':invoiceItemId')
  async getOneInvoiceItem(@Param('invoiceItemId', ParseIntPipe) id: number): Promise<invoiceItems> {
    return await this.invoiceItemServices.getInvoiceItem(id);
  }

  @Get()
  @ApiBearerAuth()
  async getInvoiceItem(@Query('companyId', ParseIntPipe) companyId: number) {
    return await this.invoiceItemServices.getInvoiceItems(companyId);
  }

  @Post()
  @UsePipes(new ValidationPipe())
  async create(@Body() data: createInvoiceItemDto, @Query('invoiceId', ParseIntPipe) invoiceId: number) {
    return await this.invoiceItemServices.createInvoiceItem(data, invoiceId);
  }

  @Put(':invoiceItemId')
  @UsePipes(new ValidationPipe())
  async update(@Param('invoiceItemId', ParseIntPipe) id: number, @Body() data: updateInvoiceItemDto) {
    return await this.invoiceItemServices.updateInvoiceItem(id, data);
  }

  @Delete(':invoiceItemId')
  async delete(@Param('invoiceItemId', ParseIntPipe) id: number) {
    await this.invoiceItemServices.deleteInvoiceItem(id)
  }

}
