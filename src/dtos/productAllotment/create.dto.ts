import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator"

export class createProductAllotmentDto {

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

    @IsNumber()
    @IsNotEmpty()
    vendor: number

    @IsNumber()
    @IsNotEmpty()
    product: number
}