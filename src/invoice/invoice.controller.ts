import { Controller, Get } from "@nestjs/common";
import { incvoiceService } from "./invoice.service";
 

@Controller('invoice')


export class invoiceController{
    constructor(
        private readonly invoiceService:incvoiceService
    ){

    }

    // @Get()

    // generate(){
         
    //     return this.invoiceService.generateInvoice()
    // }
}