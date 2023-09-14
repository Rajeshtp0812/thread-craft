import { Module } from "@nestjs/common";
import { invoiceServices } from './invoice.service'
import { invoiceController } from "./invoice.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Invoice } from "src/entity/invoice.entity";
import { InvoiceItems  } from "src/entity/invoiceItems";


@Module({
    imports: [
        TypeOrmModule.forFeature([Invoice,InvoiceItems])

    ],
    providers: [invoiceServices],
    controllers: [invoiceController]

})


export class invoiceModule{}

