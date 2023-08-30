import { Module } from "@nestjs/common";
import { invoiceServices } from './invoice.service'
import { invoiceController } from "./invoice.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Invoice } from "src/entity/invoice.entity";


@Module({
    imports: [
        TypeOrmModule.forFeature([Invoice])

    ],
    providers: [invoiceServices],
    controllers: [invoiceController]

})


export class invoiceModule {





}