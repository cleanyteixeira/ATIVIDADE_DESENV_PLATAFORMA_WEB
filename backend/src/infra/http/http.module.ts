import { Module } from '@nestjs/common';
import {
  AppointmentController,
  DoctorController,
  PatientController,
  UserController,
} from './controllers';
import { DatabaseModule } from '../database/database.module';
import {
  AppointmentService,
  DoctorService,
  PatientService,
  UserService,
} from 'src/app/services';
import { AuthModule } from '../auth/auth.module';
import { AuthService } from '../auth/auth.service';
import { AuthController } from '../auth/auth.controller';

@Module({
  controllers: [
    AuthController,
    UserController,
    PatientController,
    DoctorController,
    AppointmentController,
  ],
  imports: [DatabaseModule, AuthModule],
  providers: [
    UserService,
    PatientService,
    DoctorService,
    AppointmentService,
    AuthService,
  ],
})
export class HttpModule {}
