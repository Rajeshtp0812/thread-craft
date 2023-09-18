import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { updateInvoiceDto } from 'src/dtos/invoice/update.dto';
import { Invoice } from 'src/entity/invoice.entity';
import { InvoiceItems } from 'src/entity/invoiceItems';
import { Repository } from 'typeorm';

@Injectable()
export class invoiceServices {
  constructor(
    @InjectRepository(Invoice) private readonly invoice: Repository<Invoice>,
    @InjectRepository(InvoiceItems)
    private readonly invoiceItem: Repository<InvoiceItems>,
  ) {}

  async getInvoice(id: number) {
    return await this.invoice.findOne({
      where: {
        invoiceId: id,
      },
      relations: ['company', 'invoiceItems', 'client'],
    });
  }

  async getInvoices(companyId: number): Promise<Invoice[]> {
    try {
      return (await this.invoice.find({ relations: ['company'] })).filter(
        (invoice) => invoice.company.companyId === companyId,
      );
    } catch (err) {
      throw err;
    }
  }

  async createInvoice(data) {
    try {
      const {
        invoiceNo,
        supplyDate,
        state,
        transportMode,
        contact,
        address,
        gstNo,
        supplyPlace,
        cgst,
        cgstPercentage,
        sgst,
        sgstPercentage,
        totalAmount,
        amountInWords,
        companyId,
        clientId,
      } = data;
      const invoice = new Invoice();
      invoice.invoiceNo = invoiceNo;
      invoice.address = address;
      invoice.supplyDate = supplyDate;
      invoice.gstNo = gstNo;
      invoice.amountInWords = amountInWords;
      invoice.cgst = cgst;
      invoice.cgstPercentage = cgstPercentage;
      invoice.supplyPlace = supplyPlace;
      invoice.contact = contact;
      invoice.transportMode = transportMode;
      invoice.state = state;
      invoice.sgst = sgst;
      invoice.sgstPercentage = sgstPercentage;
      invoice.totalAmount = totalAmount;
      invoice.company = companyId;
      invoice.client = clientId;
      const items = data.invoiceItems.map((itemData) => {
        const item = new InvoiceItems();
        const { amount, code, hasCode, description, quantity, rate } = itemData;
        item.amount = amount;
        item.code = code;
        item.hasCode = hasCode;
        item.description = description;
        item.quantity = quantity;
        item.rate = rate;

        return item;
      });

      invoice.invoiceItems = items;

      return this.invoice.save(invoice);
    } catch (err) {
      throw err;
    }
  }

  async updateInvoice(id: number, data) {
    try {
    
      const { invoiceItems, ...updateData } = data;

  
      const getInvoice = await this.invoice.findOne({
        where: {
          invoiceId: id,
        },
        relations: ['invoiceItems'],
      });

      await this.invoice.merge(getInvoice, updateData);

      if (invoiceItems && invoiceItems.length > 0) {
        await this.invoiceItem.remove(getInvoice.invoiceItems);

        const newInvoiceItems = invoiceItems.map((itemData) => {
          const item = new InvoiceItems();
          const { amount, code, hasCode, description, quantity, rate } =itemData;
          item.amount = amount;
          item.code = code;
          item.hasCode = hasCode;
          item.description = description;
          item.quantity = quantity;
          item.rate = rate;

          return item;
        });

        getInvoice.invoiceItems = newInvoiceItems;
      }
      this.invoice.save(getInvoice);
    } catch (err) {
      throw err;
    }
  }

  async deleteInvoice(id: number) {
    try {
      return await this.invoice.delete({ invoiceId: id });
    } catch (err) {
      throw err;
    }
  }
}
