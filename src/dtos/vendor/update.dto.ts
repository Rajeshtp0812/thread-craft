import {
  IsEmail,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class updateVendorDto {

  @IsString()
  @IsOptional()
  ownerName: string;

  @IsString()
  @IsOptional()
  companyName: string;

  @IsString()
  @IsOptional()
  contact: string;

  @IsString()
  @IsOptional()
  alternateContact: string;

  @IsString()
  @IsOptional()
  address: string;

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