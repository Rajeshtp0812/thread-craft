import { updateProductDto } from 'src/dtos/product/update.dto';
import { Product } from 'src/entity/product.entity';
import { Repository } from 'typeorm';
import { ConfigService } from '@nestjs/config';
export declare class productServices {
    private readonly product;
    private configService;
    constructor(product: Repository<Product>, configService: ConfigService);
    getProduct(id: number): Promise<Product>;
    getProducts(companyId: number): Promise<Product[]>;
    createProduct(file: any, data: any): Promise<any>;
    updateProduct(id: number, data: Partial<updateProductDto>, file: any): Promise<import("typeorm").UpdateResult>;
    deleteProduct(id: number, imageUrl: string): Promise<import("typeorm").DeleteResult>;
}
