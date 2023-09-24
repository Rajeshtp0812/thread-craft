import { Type } from 'class-transformer';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPort,
  IsString,
} from 'class-validator';
import { createInvoiceItemDto } from '../invoiceitem/create.dto';

export class createInvoiceDto {
  @IsString()
  @IsNotEmpty()
  invoiceNumber: number;

  @IsString()
  @IsOptional()
  supplyDate: string;

  @IsString()
  @IsNotEmpty()
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
  gstNumber: number;

  @IsString()
  @IsOptional()
  cgstAmount: string;

  @IsString()
  @IsOptional()
  cgstPercent: string;

  @IsString()
  @IsOptional()
  sgstAmount: string;

  @IsString()
  @IsOptional()
  sgstPercent: string;

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
