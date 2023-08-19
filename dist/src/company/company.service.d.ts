import { updateCompanyDto } from 'src/dtos/company/update.dto';
import { Company } from 'src/entity/company.entity';
import { Repository } from 'typeorm';
export declare class companyServices {
    private readonly company;
    constructor(company: Repository<Company>);
    getCompany(id: number): Promise<Company>;
    getCompanies(): Promise<Company[]>;
    createCompany(data: any): Promise<any>;
    updateCompany(id: number, data: Partial<updateCompanyDto>): Promise<import("typeorm").UpdateResult>;
    deleteCompany(id: number): Promise<import("typeorm").DeleteResult>;
}
