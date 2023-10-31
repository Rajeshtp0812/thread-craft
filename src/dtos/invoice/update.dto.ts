import { Type } from 'class-transformer';
import { IsNumber, IsString, IsOptional, IsArray } from 'class-validator';
import { updateInvoiceItemDto } from '../invoiceitem/update.dto';

export class updateInvoiceDto {
  @IsString()
  @IsOptional()
  invoiceNumber: string;

  @IsString()
  @IsOptional()
  supplyDate: string;

  @IsString()
  @IsOptional()
  state: string;

  @IsString()
  @IsOptional()
  city: string;

  @IsString()
  @IsOptional()
  transportMode: string;

  @IsString()
  @IsOptional()
  contact: string;

  @IsString()
  @IsOptional()
  address: string;

  @IsString()
  @IsOptional()
  gstNumber: string;

  @IsNumber()
  @IsOptional()
  cgstAmount: number;

  @IsNumber()
  @IsOptional()
  cgstPercent: number;

  @IsNumber()
  @IsOptional()
  sgstAmount: number;

  @IsNumber()
  @IsOptional()
  sgstPercent: number;

  @IsNumber()
  @IsOptional()
  grossAmount: number;

  @IsNumber()
  @IsOptional()
  totalAmount: number;

  @IsString()
  @IsOptional()
  amountInWords: string;

  @IsNumber()
  @IsOptional()
  clientId: number;

  @IsArray()
  @IsOptional()
  @Type(() => updateInvoiceItemDto)
  invoiceItems: updateInvoiceItemDto[]


}
