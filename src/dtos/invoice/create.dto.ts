import { Type } from 'class-transformer';
import { IsArray, IsNumber, IsString, ValidateNested } from 'class-validator';
import { invoiceItems } from '../../entity/invoiceItems';

export class createInvoiceDto {

  @IsNumber()
  invoiceNo: number;

  @IsString()
  supplyDate: string;

  @IsString()
  state: string;

  @IsString()
  transportMode: string;

  @IsNumber()
  contact: number;

  @IsString()
  address: string;

  @IsNumber()
  gstNo: number;

  @IsString()
  supplyPlace: string;

  @IsString()
  cgst: string;

  @IsString()
  cgstPercentage: string;

  @IsString()
  sgst: string;

  @IsString()
  sgstPercentage: string;

  @IsNumber()
  totalAmount: number;

  @IsString()
  amountInWords: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => invoiceItems)
  invoiceItem: invoiceItems[];
}
