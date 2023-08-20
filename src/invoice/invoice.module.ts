import { Module } from "@nestjs/common";
import { incvoiceService } from "./invoice.service";
import { invoiceController } from "./invoice.controller";


@Module({
    imports:[],
    providers:[incvoiceService],
    controllers:[invoiceController]
})

export class invoiceModule{

}