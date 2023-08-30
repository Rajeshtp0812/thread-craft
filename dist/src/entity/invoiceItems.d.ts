import { BaseEntity } from 'typeorm';
import { Invoice } from './invoice.entity';
export declare class invoiceItems extends BaseEntity {
    itemId: any;
    code: string;
    description: string;
    hasCode: string;
    rate: number;
    quantity: number;
    amount: number;
    invoice: Invoice;
}
