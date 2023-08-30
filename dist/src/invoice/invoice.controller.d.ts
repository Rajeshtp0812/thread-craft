import { invoiceServices } from './invoice.service';
import { createInvoiceDto } from 'src/dtos/invoice/create.dto';
import { updateInvoiceDto } from 'src/dtos/invoice/update.dto';
import { Invoice } from 'src/entity/invoice.entity';
export declare class invoiceController {
    private invoiceServices;
    constructor(invoiceServices: invoiceServices);
    getInvoice(id: number): Promise<Invoice>;
    create(data: createInvoiceDto, companyId: number): Promise<Invoice[]>;
    update(id: number, data: updateInvoiceDto): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<void>;
}
