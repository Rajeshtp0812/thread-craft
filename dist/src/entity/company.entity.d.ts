import { BaseEntity } from "typeorm";
import { Client } from "./client.entity";
import { Product } from "./product.entity";
import { Invoice } from "./invoice.entity";
export declare class Company extends BaseEntity {
    companyId: number;
    companyName: string;
    gst: string;
    contact: string;
    email: string;
    address: string;
    state: string;
    city: string;
    pinCode: string;
    clients: Client[];
    products: Product[];
    invoice: Invoice[];
}
