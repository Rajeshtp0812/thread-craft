import { Injectable,HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
 
 
import { updateInvoiceDto } from 'src/dtos/invoice/update.dto';
import { Invoice } from 'src/entity/invoice.entity';
import { invoiceItems } from 'src/entity/invoiceItems';
import { Repository } from 'typeorm';

@Injectable()
export class invoiceServices {

  constructor(
    @InjectRepository(Invoice) private readonly invoice: Repository<Invoice>,
    @InjectRepository(invoiceItems) private readonly invoiceItem:Repository<invoiceItems>
    ) { }

  async getInvoice(id: number) {
    return await this.invoice.findOne({
      where: {
        invoiceId: id,
      }, 
      relations: ['company'],
    });
  }

  async getInvoices(): Promise<Invoice[]> {
    try {
      return await this.invoice.find();
    } catch (err) {
      throw (err);
    }
  }

  async createInvoice(data) {
    try {
       const {invoiceItems,...invoice}=data
 
     const newInvoice= await this.invoice.save(invoice);
     const newInvoiceItem= await this.invoiceItem.save(invoiceItems)

      return {
        ...newInvoice,
        ...newInvoiceItem
      }

    } catch (err) {
      throw (err);
    }
  }

  async updateInvoice(id: number, data: Partial<updateInvoiceDto>) {
    try {
      return await this.invoice.update({ invoiceId: id }, data);
    } catch (err) {
      throw (err)
    }
  }

  async deleteInvoice(id: number) {
    try {
      return await this.invoice.delete({ invoiceId: id });
    } catch (err) {
      throw (err);
    }
  }
}
