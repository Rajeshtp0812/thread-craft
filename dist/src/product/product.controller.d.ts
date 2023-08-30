/// <reference types="multer" />
import { productServices } from './product.service';
import { updateProductDto } from 'src/dtos/product/update.dto';
import { Product } from 'src/entity/product.entity';
import { createProductDto } from 'src/dtos/product/create.dto';
export declare class productController {
    private productServices;
    constructor(productServices: productServices);
    getProduct(id: number): Promise<Product>;
    getProducts(companyId: number): Promise<Product[]>;
    update(file: Express.Multer.File, id: number, data: updateProductDto): Promise<import("typeorm").UpdateResult>;
    delete(id: number, imageUrl: string): Promise<import("typeorm").DeleteResult>;
    createProduct(file: Express.Multer.File, data: createProductDto, companyId: number): Promise<any>;
}
