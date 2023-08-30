import { IsString, IsOptional, IsNumber } from 'class-validator';

export class updateInvoiceItemDto {

  @IsString()
  @IsOptional()
  code: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsString()
  @IsOptional()
  hasCode: string;

  @IsNumber()
  @IsOptional()
  rate: number;

  @IsNumber()
  @IsOptional()
  quantity: number;

  @IsNumber()
  @IsOptional()
  amount: number;
}
