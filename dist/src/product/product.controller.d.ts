import { productServices } from './product.service';
import { updateProductDto } from 'src/dtos/product/update.dto';
import { product } from 'src/entity/product.entity';
import { createProductDto } from 'src/dtos/product/create.dto';
export declare class productController {
    private productServices;
    constructor(productServices: productServices);
    getProduct(id: number): Promise<product>;
    getProducts(companyId: number): Promise<product[]>;
    create(data: createProductDto, companyId: number): Promise<any>;
    update(id: number, data: updateProductDto): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
