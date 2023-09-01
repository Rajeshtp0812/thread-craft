import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";


export class updateProductAllotmentDto {

      @IsNumber()
      @IsOptional()
      adavancedPayment: number

      @IsNumber()
      @IsOptional()
      totalAmount: number

      @IsNumber()
      @IsOptional()
      productQuantity: number

      @IsNumber()
      @IsOptional()
      balanceAmount: number

      @IsNumber()
      @IsOptional()
      vendorRate: number

      @IsString()
      @IsOptional()
      date: string

      @IsString()
      @IsOptional()
      size: string

      @IsString()
      @IsOptional()
      deliveryDate: string

      @IsString()
      @IsOptional()
      description: string

      @IsNotEmpty()
      vendor: any

      @IsNotEmpty()
      product: any

      @IsNotEmpty()
      company: any
} 