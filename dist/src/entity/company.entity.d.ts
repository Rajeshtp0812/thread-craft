import { BaseEntity } from "typeorm";
import { Client } from "./client.entity";
import { product } from "./product.entity";
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
    products: product[];
}
