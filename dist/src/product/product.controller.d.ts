/// <reference types="multer" />
import { productServices } from './product.service';
import { updateProductDto } from 'src/dtos/product/update.dto';
import { product } from 'src/entity/product.entity';
import { createProductDto } from 'src/dtos/product/create.dto';
export declare class productController {
    private productServices;
    constructor(productServices: productServices);
    getProduct(id: number): Promise<product>;
    getProducts(companyId: number): Promise<product[]>;
    update(file: Express.Multer.File, id: number, url: string, data: updateProductDto): Promise<import("typeorm").UpdateResult>;
    delete(id: number, url: string): Promise<import("typeorm").DeleteResult>;
    createProduct(file: Express.Multer.File, data: createProductDto, companyId: number): Promise<any>;
    serveAvatar(fileId: any, res: any): Promise<any>;
}
