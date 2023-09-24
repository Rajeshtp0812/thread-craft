import { Type } from 'class-transformer';
import { IsNumber, IsString, IsOptional, IsArray } from 'class-validator';
 
 
import { updateInvoiceItemDto } from '../invoiceitem/update.dto';

export class updateInvoiceDto {
  @IsString()
  @IsOptional()
  invoiceNumber: number;

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

  @IsArray()
  @IsOptional()
  @Type(()=>updateInvoiceItemDto)
  invoiceItems: updateInvoiceItemDto[]


}
