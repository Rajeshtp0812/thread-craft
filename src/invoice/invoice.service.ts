import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
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
        invoiceNumber,
        supplyDate,
        state,
        transportMode,
        contact,
        address,
        gstNumber,
        cgstAmount,
        cgstPercent,
        sgstAmount,
        sgstPercent,
        totalAmount,
        amountInWords,
        companyId,
        clientId,
        grossAmount
      } = data;
      const invoice = new Invoice();
      invoice.invoiceNumber = invoiceNumber;
      invoice.address = address;
      invoice.supplyDate = supplyDate;
      invoice.gstNumber = gstNumber;
      invoice.amountInWords = amountInWords;
      invoice.cgstAmount = cgstAmount;
      invoice.cgstPercent = cgstPercent;
      invoice.contact = contact;
      invoice.transportMode = transportMode;
      invoice.state = state;
      invoice.sgstAmount = sgstAmount;
      invoice.sgstPercent = sgstPercent;
      invoice.totalAmount = totalAmount;
      invoice.company = companyId;
      invoice.client = clientId;
      invoice.grossAmount=grossAmount
      const items = data.invoiceItems.map((itemData) => {
        const item = new InvoiceItems();
        const { amount, code, hsnCode, description, quantity, rate } = itemData;
        item.amount = amount;
        item.code = code;
        item.hsnCode = hsnCode;
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
          const { amount, code, hsnCode, description, quantity, rate } =
            itemData;
          item.amount = amount;
          item.code = code;
          item.hsnCode = hsnCode;
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
