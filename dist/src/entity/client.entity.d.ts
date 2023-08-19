import { BaseEntity } from 'typeorm';
import { Company } from './company.entity';
export declare class Client extends BaseEntity {
    clientId: number;
    companyName: string;
    gst: string;
    address: string;
    email: string;
    pinCode: string;
    state: string;
    city: string;
    company: Company;
}
