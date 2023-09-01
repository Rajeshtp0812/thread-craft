import { IsNumber, IsString } from 'class-validator';

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
}
