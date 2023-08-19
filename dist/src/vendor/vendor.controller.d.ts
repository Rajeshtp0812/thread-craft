import { vendorServices } from './vendor.service';
import { updateVendorDto } from 'src/dtos/vendor/update.dto';
import { vendor } from 'src/entity/vendor.entity';
import { createVendorDto } from 'src/dtos/vendor/create.dto';
export declare class vendorController {
    private vendorServices;
    constructor(vendorServices: vendorServices);
    getVendor(id: number): Promise<vendor>;
    getVendors(companyId: number): Promise<vendor[]>;
    create(data: createVendorDto, companyId: number): Promise<any>;
    update(id: number, data: updateVendorDto): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<void>;
}
