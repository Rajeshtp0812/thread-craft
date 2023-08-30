import { BaseEntity } from 'typeorm';
import { Company } from './company.entity';
import { invoiceItems } from './invoiceItems';
export declare class Invoice extends BaseEntity {
    invoiceId: number;
    invoiceNo: number;
    supplyDate: string;
    state: string;
    transportMode: string;
    contact: number;
    address: string;
    gstNo: number;
    supplyPlace: string;
    cgst: string;
    cgstPercentage: string;
    sgst: string;
    sgstPercentage: string;
    totalAmount: number;
    amountInWords: string;
    companyId: number;
    company: Company;
    items: invoiceItems[];
}
