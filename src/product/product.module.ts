import { Get, Module } from "@nestjs/common";
 import {productServices} from './product.service'
 import { productController } from "./product.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { product } from "src/entity/product.entity";
import { ConfigService } from "@nestjs/config";
 
 
 
@Module({
    imports:[
        TypeOrmModule.forFeature([product]),   
    ],
    providers:[productServices],
    controllers:[productController],
    exports:[productServices]
    
})


export class productModule{
      
    

      

}