import { invoiceItemServices } from './invoiceItem.service';
import { updateInvoiceItemDto } from 'src/dtos/invoiceItem/update.dto';
import { invoiceItems } from 'src/entity/invoiceItems';
import { createInvoiceItemDto } from 'src/dtos/invoiceItem/create.dto';
export declare class invoiceItemController {
    private invoiceItemServices;
    constructor(invoiceItemServices: invoiceItemServices);
    getOneInvoiceItem(id: number): Promise<invoiceItems>;
    getInvoiceItem(invoiceId: number): Promise<invoiceItems[]>;
    create(data: createInvoiceItemDto, invoiceId: number): Promise<any>;
    update(id: number, data: updateInvoiceItemDto): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<void>;
}
