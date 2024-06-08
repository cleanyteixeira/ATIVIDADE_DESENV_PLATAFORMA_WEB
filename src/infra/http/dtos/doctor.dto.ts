import {
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class FindDoctorByIdDto {
  @IsString()
  @IsUUID()
  id: string;
}

export class CreateDoctorAddressDto {
  @IsNotEmpty()
  @IsString()
  streetAddress: string;

  @IsNotEmpty()
  @IsString()
  city: string;

  @IsNotEmpty()
  @IsString()
  state: string;
}

export class CreateDoctorContactDto {
  @IsNotEmpty()
  @IsString()
  phone: string;

  @IsString()
  @IsOptional()
  phone2?: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;
}

export class CreateDoctorAdditionalDataDto {
  @IsNotEmpty()
  @IsString()
  specialty: string;

  @IsNotEmpty()
  @IsString()
  register: string;

  @IsNotEmpty()
  @IsString({ each: true })
  acceptedHealthInsurance: string;
}

export class CreateDoctorDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  socialCode: string;

  @IsNotEmpty()
  @IsDateString(
    {},
    { message: 'birthdayDate must be a valid date in the format YYYY-MM-DD' },
  )
  birthdayDate: string;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => CreateDoctorAddressDto)
  address: CreateDoctorAddressDto;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => CreateDoctorContactDto)
  contact: CreateDoctorContactDto;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => CreateDoctorAdditionalDataDto)
  additionalData: CreateDoctorAdditionalDataDto;
}

export class DoctorDto {
  id: string;
  name: string;
  socialCode: string;
  birthdayDate: string;
  address: DoctorAddressDto;
  contact: DoctorContactDto;
  additionalData: DoctorAdditionalDataDto;
  createdAt: Date;
  updatedAt: Date;
}

export class DoctorAddressDto {
  streetAddress: string;
  city: string;
  state: string;
}

export class DoctorContactDto {
  phone: string;
  phone2?: string;
  email: string;
}

export class DoctorAdditionalDataDto {
  specialty: string;
  register: string;
  acceptedHealthInsurance: string;
}
