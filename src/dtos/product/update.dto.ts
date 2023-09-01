import { IsOptional, IsString } from 'class-validator';

export class updateProductDto {

  @IsString()
  @IsOptional()
  date: string;

  @IsString()
  @IsOptional()
  details: string;

  @IsString()
  @IsOptional()
  rate: string;

  @IsString()
  @IsOptional()
  code: string;

  @IsString()
  @IsOptional()
  billNo: string;

  @IsString()
  @IsOptional()
  runNo: string;

  @IsOptional()
  @IsString()
  embroidary: string;

  @IsString()
  @IsOptional()
  size: string;

  @IsString()
  @IsOptional()
  average: string;

  @IsString()
  @IsOptional()
  totalAmount: string;

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