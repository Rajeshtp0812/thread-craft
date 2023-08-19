import { updateProductAllotmentDto } from 'src/dtos/productAllotment/update.dto';
import { productAllotment } from 'src/entity/productAllotment.entity';
import { Repository } from 'typeorm';
export declare class productAllotmentServices {
    private readonly productAllotment;
    constructor(productAllotment: Repository<productAllotment>);
    getAllotedProduct(id: number): Promise<productAllotment>;
    getAllotedProducts(): Promise<productAllotment[]>;
    createAllotedProduct(data: any): Promise<any>;
    updateAllotedProduct(id: number, data: Partial<updateProductAllotmentDto>): Promise<import("typeorm").UpdateResult>;
    deleteAllotedProduct(id: number): Promise<import("typeorm").DeleteResult>;
}
