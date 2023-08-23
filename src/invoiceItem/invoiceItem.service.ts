import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { updateInvoiceItemDto } from 'src/dtos/invoiceItem/update.dto';
import { invoiceItems } from 'src/entity/invoiceItems';

import { Repository } from 'typeorm';

@Injectable()
export class invoiceItemServices {

  constructor(@InjectRepository(invoiceItems) private readonly invoiceItem: Repository<invoiceItems>) { }

  async getInvoiceItem(id: number) {
    try {
      return await this.invoiceItem.findOne({
        where: {
          invoiceItemId: id,

        }, relations: ["invoice"]
      });
    } catch (err) {
      throw (err)
    }
  }

  async getInvoiceItems(invoiceId): Promise<invoiceItems[]> {
    try {
      return (await this.invoiceItem.find({ relations: ["invoice"] })).filter(invoiceItem => invoiceItem.invoice.invoiceId === invoiceId);
    } catch (err) {
      throw (err)
    }
  }

  async createInvoiceItem(data, companyId) {
    try {
      data['company'] = companyId;
      return await this.invoiceItem.save(data);
    } catch (err) {
      throw (err);
    }
  }

  async updateInvoiceItem(id: number, data: Partial<updateInvoiceItemDto>) {
    try {
      return this.invoiceItem.update({ invoiceItemId: id }, data);

    } catch (err) {
      throw (err)
    }
  }

  async deleteInvoiceItem(id: number) {
    try {
      return await this.invoiceItem.delete({ invoiceItemId: id })
    } catch (err) {
      throw (err)
    }
  }
}
