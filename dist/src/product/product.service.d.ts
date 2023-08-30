import { updateProductDto } from 'src/dtos/product/update.dto';
import { product } from 'src/entity/product.entity';
import { Repository } from 'typeorm';
export declare class productServices {
    private readonly product;
    constructor(product: Repository<product>);
    getProduct(id: number): Promise<product>;
    getProducts(companyId: number): Promise<product[]>;
    createProduct(image: any, data: any): Promise<any>;
    updateProduct(id: number, data: Partial<updateProductDto>, file: any, product_id: string): Promise<import("typeorm").UpdateResult>;
    deleteProduct(id: number, product_id: string): Promise<import("typeorm").DeleteResult>;
}
