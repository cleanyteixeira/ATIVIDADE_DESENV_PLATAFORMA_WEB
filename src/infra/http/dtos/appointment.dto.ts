import {
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class FindAppointmentByIdDto {
  @IsString()
  @IsUUID()
  id: string;
}

export class QueryAppointmentDto {
  @IsOptional()
  @IsDateString()
  date: string;

  @IsOptional()
  @IsString()
  status: string;

  @IsOptional()
  @IsString()
  type: string;

  @IsOptional()
  @IsUUID()
  doctorId: string;

  @IsOptional()
  @IsUUID()
  patientId: string;
}

export class CreateAppointmentDto {
  @IsNotEmpty()
  @IsDateString()
  date: string;

  @IsNotEmpty()
  @IsString()
  status: string;

  @IsNotEmpty()
  @IsString()
  type: string;

  @IsNotEmpty()
  @IsUUID()
  doctorId: string;

  @IsNotEmpty()
  @IsUUID()
  patientId: string;
}

export class AppointmentDto {
  id: string;
  date: string;
  status: string;
  type: string;
  doctorId: string;
  patientId: string;
  updatedAt: Date;
  createdAt: Date;
}
