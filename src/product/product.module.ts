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
    providers: [productServices, {
        inject: [ConfigService],
        provide: 'Clouldinary',
        useFactory: (configService: ConfigService) => {
            v2.config({
                cloud_name: configService.get('cloud_name'),
                api_key: configService.get('api_key'),
                api_secret: configService.get('api_secret')
            });
        }
    }],
    controllers: [productController]

})


export class productModule {





}