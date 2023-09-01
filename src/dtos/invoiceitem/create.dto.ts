import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class createInvoiceItemDto {
  @IsString()
  @IsNotEmpty()
  code: string;
  @IsString()
  @IsNotEmpty()
  description: string;
  @IsString()
  @IsNotEmpty()
  hasCode: string;
  @IsNumber()
  @IsNotEmpty()
  rate: number;
  @IsNumber()
  @IsNotEmpty()
  quantity: number;
  @IsNumber()
  @IsNotEmpty()
  amount: number;
  @IsNumber()
  @IsNotEmpty()
  invoiceId: number;
}
