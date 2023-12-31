import {
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class createClientDto {

  @IsString()
  @IsNotEmpty()
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
  @IsString()
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
