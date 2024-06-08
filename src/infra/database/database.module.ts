import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import {
  UserRepository,
  PatientRepository,
  DoctorRepository,
  AppointmentRepository,
} from 'src/app/repositories';
import {
  PrismaUserRepository,
  PrismaPatientRepository,
  PrismaDoctorRepository,
  PrismaAppointmentRepository,
} from './prisma/repositories';

@Module({
  providers: [
    PrismaService,
    {
      provide: UserRepository,
      useClass: PrismaUserRepository,
    },
    {
      provide: PatientRepository,
      useClass: PrismaPatientRepository,
    },
    {
      provide: DoctorRepository,
      useClass: PrismaDoctorRepository,
    },
    {
      provide: AppointmentRepository,
      useClass: PrismaAppointmentRepository,
    },
  ],
  exports: [
    UserRepository,
    PatientRepository,
    DoctorRepository,
    AppointmentRepository,
  ],
})
export class DatabaseModule {}
