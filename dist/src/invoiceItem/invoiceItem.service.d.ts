import { updateInvoiceItemDto } from 'src/dtos/invoiceItem/update.dto';
import { invoiceItems } from 'src/entity/invoiceItems';
import { Repository } from 'typeorm';
export declare class invoiceItemServices {
    private readonly invoiceItem;
    constructor(invoiceItem: Repository<invoiceItems>);
    getInvoiceItem(id: number): Promise<invoiceItems>;
    getInvoiceItems(invoiceId: any): Promise<invoiceItems[]>;
    createInvoiceItem(data: any, companyId: any): Promise<any>;
    updateInvoiceItem(id: number, data: Partial<updateInvoiceItemDto>): Promise<import("typeorm").UpdateResult>;
    deleteInvoiceItem(id: number): Promise<import("typeorm").DeleteResult>;
}
