import { updateVendorDto } from 'src/dtos/vendor/update.dto';
import { vendor } from 'src/entity/vendor.entity';
import { Repository } from 'typeorm';
export declare class vendorServices {
    private readonly vendor;
    constructor(vendor: Repository<vendor>);
    getOnevendor(id: number): Promise<vendor>;
    getVendors(companyId: number): Promise<vendor[]>;
    createvendor(data: any, companyId: any): Promise<any>;
    updatevendor(id: number, data: Partial<updateVendorDto>): Promise<import("typeorm").UpdateResult>;
    deleteVendor(id: number): Promise<import("typeorm").DeleteResult>;
}
