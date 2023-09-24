import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class createInvoiceItemDto {
  @IsString()
  @IsNotEmpty()
  code: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsString()
  @IsOptional()
  hsnCode: string;

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
