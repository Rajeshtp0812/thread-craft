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
  @IsNotEmpty()
  state: string;

  @IsString()
  @IsNotEmpty()
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
