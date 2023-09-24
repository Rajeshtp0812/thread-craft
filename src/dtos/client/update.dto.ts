import {
  IsOptional,
  IsString,
} from 'class-validator';

export class updateClientDto {
  @IsString()
  @IsOptional()
  companyName: string;

  @IsString()
  @IsOptional()
  gst: string;

  @IsString()
  @IsOptional()
  contact: string;

  @IsString()
  @IsOptional()
  address: string;

  @IsOptional()
  email: string;

  @IsString()
  @IsOptional()
  pinCode: string;

  @IsString()
  @IsOptional()
  state: string;

  @IsString()
  @IsOptional()
  city: string;
}