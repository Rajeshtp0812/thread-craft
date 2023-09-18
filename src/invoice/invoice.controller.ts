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
import { invoiceServices } from './invoice.service';
import { createInvoiceDto } from 'src/dtos/invoice/create.dto';
import { updateInvoiceDto } from 'src/dtos/invoice/update.dto';
import { Invoice } from 'src/entity/invoice.entity';
import { Public } from '../auth/public.decorator';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('invoice')
@Controller('invoice')
export class invoiceController {

  constructor(private invoiceServices: invoiceServices) { }

  @Get(':id')
  async getInvoice(@Param('id', ParseIntPipe) id: number): Promise<Invoice> {
    return await this.invoiceServices.getInvoice(id);
  }

   @Get()
   async getInvoices(@Query('companyId', ParseIntPipe) companyId: number){
    return await this.invoiceServices.getInvoices(companyId)
   }

  @Post()
  async create(@Body() data: createInvoiceDto,@Query('companyId',ParseIntPipe) companyId:number) {
    return await this.invoiceServices.createInvoice({...data,companyId});
  }

  @Put(':id')
  @UsePipes(new ValidationPipe())
  async update(@Param('id', ParseIntPipe) id: number, @Body() data: updateInvoiceDto) {
    return await this.invoiceServices.updateInvoice(id, data);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    await this.invoiceServices.deleteInvoice(id)
  }
}
