import { invoiceItems } from '../../entity/invoiceItems';
export declare class createInvoiceDto {
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
    invoiceItem: invoiceItems[];
}
