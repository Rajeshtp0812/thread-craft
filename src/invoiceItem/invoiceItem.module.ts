import { Module } from "@nestjs/common";
import { invoiceItemServices } from './invoiceItem.service'
import { invoiceItemController } from "./invoiceItem.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { invoiceItems } from "src/entity/invoiceItems";
 



@Module({
    imports: [
        TypeOrmModule.forFeature([invoiceItems])

    ],
    providers: [invoiceItemServices],
    controllers: [invoiceItemController]

})


export class invoiceItemModule {





}