import { BaseEntity } from "typeorm";
export declare class productAllotment extends BaseEntity {
    productAllotmentId: number;
    date: string;
    vendorId: number;
    companyId: number;
    size: string;
    productQuantity: number;
    vendorRate: number;
    deliveryDate: string;
    totalAmount: number;
    advancePayment: number;
    balanceAmount: number;
    description: string;
    image: string;
    productId: number;
}
