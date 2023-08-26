import { IsNumber, IsString, IsOptional } from 'class-validator';

export class updateInvoiceDto {
  @IsNumber()
  @IsOptional()
  invoiceNo: number;
  @IsString()
  @IsOptional()
  supplyDate: string;
  @IsString()
  @IsOptional()
  state: string;
  @IsString()
  @IsOptional()
  transportMode: string;
  @IsNumber()
  @IsOptional()
  contact: number;
  @IsString()
  @IsOptional()
  address: string;
  @IsNumber()
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
  @IsOptional()
  totalAmount: number;
  @IsString()
  @IsOptional()
  amountInWords: string;
}
