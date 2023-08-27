import { productAllotmentServices } from './productAllotment.service';
import { createProductAllotmentDto } from 'src/dtos/productAllotment/create.dto';
import { updateProductAllotmentDto } from 'src/dtos/productAllotment/update.dto';
import { productAllotment } from 'src/entity/productAllotment.entity';
export declare class productAllotmentController {
    private productAllotmentServices;
    constructor(productAllotmentServices: productAllotmentServices);
    getOneAllotedProduct(id: number): Promise<productAllotment>;
    getproductAllotment(companyId: number): Promise<productAllotment[]>;
    create(data: createProductAllotmentDto): Promise<any>;
    update(id: number, data: Partial<updateProductAllotmentDto>): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
