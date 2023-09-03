import { IsArray, IsNotEmpty, IsNumber, IsOptional, IsPort, IsString } from 'class-validator';

export class createInvoiceDto {
  @IsString()
  invoiceNo: number;

  @IsString()
  supplyDate: string;

  @IsString()
  state: string;

  @IsString()
  @IsOptional()
  transportMode: string;

  @IsString()
  @IsOptional()
  contact: number;

  @IsString()
  @IsOptional()
  address: string;

  @IsString()
  @IsOptional()
  gstNo: number;

  @IsString()
  @IsOptional()
  supplyPlace: string;

  @IsString()
  @IsOptional()
  cgst: string;

  @IsString()
  @IsOptional()
  cgstPercentage: string;

  @IsString()
  @IsOptional()
  sgst: string;

  @IsString()
  @IsOptional()
  sgstPercentage: string;

  @IsNumber()
  @IsNotEmpty()
  totalAmount: number;

  @IsString()
  @IsOptional()
  amountInWords: string;
  
  @IsArray()
  @IsNotEmpty()
  invoiceItems:[]
}
