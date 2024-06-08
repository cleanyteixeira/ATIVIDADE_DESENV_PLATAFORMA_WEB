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

export class FindPatientByIdDto {
  @IsString()
  @IsUUID()
  id: string;
}

export class CreatePatientAddressDto {
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

export class CreatePatientContactDto {
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

export class CreatePatientAdditionalDataDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  observation: string;
}

export class CreatePatientDto {
  @IsNotEmpty({
    message: 'Nome do Paciente é obrigatório',
  })
  @IsString()
  name: string;

  @IsNotEmpty({
    message: 'Cpf do Paciente é obrigatório',
  })
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
  @Type(() => CreatePatientAddressDto)
  address: CreatePatientAddressDto;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => CreatePatientContactDto)
  contact: CreatePatientContactDto;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => CreatePatientAdditionalDataDto)
  additionalData: CreatePatientAdditionalDataDto;
}

export class PatientDto {
  id: string;
  name: string;
  socialCode: string;
  birthdayDate: string;
  address: PatientAddressDto;
  contact: PatientContactDto;
  additionalData: PatientAdditionalDataDto;
  createdAt: Date;
  updatedAt: Date;
}

export class PatientAddressDto {
  streetAddress: string;
  city: string;
  state: string;
}

export class PatientContactDto {
  phone: string;
  phone2?: string;
  email: string;
}

export class PatientAdditionalDataDto {
  name: string;
  observation: string;
}
