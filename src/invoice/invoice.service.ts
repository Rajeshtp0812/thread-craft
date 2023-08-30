import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { updateInvoiceDto } from 'src/dtos/invoice/update.dto';
import { Invoice } from 'src/entity/invoice.entity';
import { Repository } from 'typeorm';
import { invoiceItems } from '../entity/invoiceItems';

@Injectable()
export class invoiceServices {

  constructor(@InjectRepository(Invoice) private readonly invoice: Repository<Invoice>) { }

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
      // let invoice = await this.invoice.save(data.invoice);
      // data.invoiceItems?.forEach(async (items: any) => {
      //   items['invoiceId'] = invoice.id;
      //   await this.invoiceItems.save(items);
      // });
      return this.invoice.create(data.invoice);
      // return this.invoice.save(invoice);
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
