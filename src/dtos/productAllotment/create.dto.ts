import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator"

export class createProductAllotmentDto {

    @IsNumber()
    @IsOptional()
    adavancedPayment: number

    @IsNumber()
    @IsOptional()
    totalAmount: number

    @IsNumber()
    @IsNotEmpty()
    productQuantity: number

    @IsNumber()
    @IsOptional()
    balanceAmount: number

    @IsNumber()
    @IsNotEmpty()
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
    @IsNotEmpty()
    description: string

    @IsNumber()
    @IsNotEmpty()
    vendor: number

    @IsString()
    @IsNotEmpty()
    product: string
}