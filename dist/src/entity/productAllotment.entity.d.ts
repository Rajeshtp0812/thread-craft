import { BaseEntity } from "typeorm";
export declare class productAllotment extends BaseEntity {
    productAllotmentId: number;
    size: string;
    quantity: number;
    vendorRate: number;
    deliveryDate: string;
    totalAmount: number;
    advancePayment: number;
    balanceAmount: number;
    description: string;
    vendor: number;
    product: number;
    company: number;
}
