import { IsNotEmpty, IsOptional, IsString, IsNumber, IsDate } from 'class-validator';
import { isArrayBuffer } from 'util/types';

export class createProductDto {

  @IsString()
  @IsNotEmpty()
  date:string;

  @IsString()
  @IsNotEmpty()
  details: string;

  @IsString()
  @IsNotEmpty()
  rate: string;

  @IsString()
  @IsNotEmpty()
  code: string;

  @IsString()
  @IsNotEmpty()
  billNo: string;

  @IsString()
  @IsNotEmpty()
  runNo:  string;

  @IsOptional()
  @IsString()
  embroidary: string;

  @IsString()
  @IsOptional()
  size: string;

  @IsString()
  @IsOptional()
  average:string;

  @IsString()
  @IsOptional()
  totalAmount:string;

  @IsString()
  @IsOptional()
  canvas: string;

  @IsString()
  @IsOptional()
  fittingStich: string;

  @IsString()
  @IsOptional()
  buttonStich: string;

  @IsString()
  @IsOptional()
  print: string;

  @IsString()
  @IsOptional()
  pintex: string;

  @IsString()
  @IsOptional()
  kMaking: string;

  @IsString()
  @IsOptional()
  tag: string;

  @IsString()
  @IsOptional()
  image: string;

  @IsString()
  @IsOptional()
  label: string;

  @IsString()
  @IsOptional()
  making: string;
}
