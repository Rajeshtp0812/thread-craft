import { updateProductDto } from 'src/dtos/product/update.dto';
import { product } from 'src/entity/product.entity';
import { Repository } from 'typeorm';
import { ConfigService } from '@nestjs/config';
export declare class productServices {
    private readonly product;
    private configService;
    constructor(product: Repository<product>, configService: ConfigService);
    getProduct(id: number): Promise<product>;
    getProducts(companyId: number): Promise<product[]>;
    createProduct(file: any, data: any): Promise<any>;
    updateProduct(id: number, data: Partial<updateProductDto>): Promise<import("typeorm").UpdateResult>;
    deleteProduct(id: number, imageUrl: string): Promise<import("typeorm").DeleteResult>;
}
