import { BaseEntity } from "typeorm";
import { Company } from "./company.entity";
import { product } from "./product.entity";
export declare class productAllotment extends BaseEntity {
    productAllotmentId: number;
    date: string;
    company: Company;
    size: string;
    productQuantity: number;
    vendorRate: number;
    deliveryDate: string;
    totalAmount: number;
    advancePayment: number;
    balanceAmount: number;
    description: string;
    product: product;
}
