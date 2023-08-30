import { updateInvoiceDto } from 'src/dtos/invoice/update.dto';
import { Invoice } from 'src/entity/invoice.entity';
import { Repository } from 'typeorm';
export declare class invoiceServices {
    private readonly invoice;
    constructor(invoice: Repository<Invoice>);
    getInvoice(id: number): Promise<Invoice>;
    getInvoices(): Promise<Invoice[]>;
    createInvoice(data: any): Promise<Invoice[]>;
    updateInvoice(id: number, data: Partial<updateInvoiceDto>): Promise<import("typeorm").UpdateResult>;
    deleteInvoice(id: number): Promise<import("typeorm").DeleteResult>;
}
