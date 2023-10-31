import { Type } from 'class-transformer';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { createInvoiceItemDto } from '../invoiceitem/create.dto';

export class createInvoiceDto {
  @IsString()
  @IsNotEmpty()
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

  @IsNotEmpty()
  cgstAmount: number;

   
  @IsNotEmpty()
  cgstPercent: number;

  @IsNotEmpty()
   grossAmount: number;

   
  @IsNotEmpty()
  sgstAmount: number;

  
  @IsNotEmpty()
  sgstPercent: number;

   
  @IsNotEmpty()
  totalAmount: number;

  @IsString()
  @IsNotEmpty()
  amountInWords: string;

  @IsNumber()
  @IsNotEmpty()
  clientId: number;

  @IsArray()
  @IsNotEmpty()
  @Type(() => createInvoiceItemDto)
  invoiceItems: createInvoiceItemDto[];
}
