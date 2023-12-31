import {
  IsOptional,
  IsString,
} from 'class-validator';

export class updateCompanyDto {

  @IsString()
  @IsOptional()
  companyName: string;

  @IsString()
  @IsOptional()
  gst: string;

  @IsString()
  @IsOptional()
  contact: string;

  @IsOptional()
  @IsString()
  email: string;

  @IsString()
  @IsOptional()
  address: string;

  @IsString()
  @IsOptional()
  state: string;

  @IsString()
  @IsOptional()
  city: string;

  @IsString()
  @IsOptional()
  pinCode: string;
}
