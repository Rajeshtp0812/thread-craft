import { Get, Module } from "@nestjs/common";
import { productServices } from './product.service'
import { productController } from "./product.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "src/entity/product.entity";
import { ConfigService } from "@nestjs/config";
import { v2 } from "cloudinary";


@Module({
    imports: [
        TypeOrmModule.forFeature([Product]),
    ],
    providers: [productServices],
    controllers: [productController]

})


export class productModule {





}