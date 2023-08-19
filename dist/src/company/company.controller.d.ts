import { companyServices } from './company.service';
import { createCompanyDto } from 'src/dtos/company/create.dto';
import { updateCompanyDto } from 'src/dtos/company/update.dto';
import { Company } from 'src/entity/company.entity';
export declare class companyController {
    private companyServices;
    constructor(companyServices: companyServices);
    getOneComapany(id: number): Promise<Company>;
    getCompany(): Promise<Company[]>;
    create(data: createCompanyDto): Promise<any>;
    update(id: number, data: updateCompanyDto): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<void>;
}
