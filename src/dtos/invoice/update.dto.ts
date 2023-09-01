import { IsNumber, IsString, IsOptional } from 'class-validator';

export class updateInvoiceDto {
  @IsString()
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
  @IsOptional()
  totalAmount: number;
  @IsString()
  @IsOptional()
  amountInWords: string;
}
