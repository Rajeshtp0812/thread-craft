import { Injectable } from '@nestjs/common';
import { productServices } from './product/product.service';
import { vendorServices } from './vendor/vendor.service';
import { clientServices } from './client/client.service';
import { companyServices } from './company/company.service';
import { invoiceServices } from './invoice/invoice.service';

@Injectable()
export class AppService {
  constructor(
    private readonly productService:productServices,
    private readonly vendorService:vendorServices ,
    private readonly clientService:clientServices,
    private readonly companyService: companyServices,
    private readonly invoiceService:invoiceServices
  ){

  }
   
  async count(){
       const [product,company,vendor,client,invoice]=await Promise.all([
         this.productService.count(),
         this.companyService.count(),
         this.vendorService.count(),
         this.clientService.count(),
         this.invoiceService.count()
       ])

       return {product,company,vendor,client,invoice}
  }
}
