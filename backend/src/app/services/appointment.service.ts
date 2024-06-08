import { Injectable, NotFoundException } from '@nestjs/common';
import { AppointmentRepository } from '../repositories';
import { AppointmentEntity, AppointmentEntityProps } from '../entities';
import { DoctorService } from './doctor.service';
import { PatientService } from './patient.service';

@Injectable()
export class AppointmentService {
  constructor(
    private readonly appointmentRepository: AppointmentRepository,
    private readonly doctorService: DoctorService,
    private readonly patientService: PatientService,
  ) {}

  async findById(appointmentId: string) {
    const appointment =
      await this.appointmentRepository.findById(appointmentId);

    if (!appointment) {
      throw new NotFoundException(
        `Appointment with id ${appointmentId} not found`,
      );
    }

    return appointment;
  }

  async findByQuery(params: Partial<AppointmentEntityProps>) {
    const appointment = await this.appointmentRepository.findByQuery(params);
    return appointment;
  }

  async findAll() {
    const appointments = await this.appointmentRepository.findAll();
    return appointments;
  }

  async create(appointmentProps: AppointmentEntityProps) {
    const appointment = new AppointmentEntity(appointmentProps);
    await this.doctorService.findById(appointmentProps.doctorId);
    await this.patientService.findById(appointmentProps.patientId);
    const createAppointment =
      await this.appointmentRepository.create(appointment);
    return createAppointment;
  }

  async patch(id: string, fields: Partial<AppointmentEntityProps>) {
    const appointment = await this.findById(id);

    for (const key in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, key)) {
        if (['id', 'createdAt', 'updatedAt'].includes(key)) {
          continue;
        }
        // if (typeof fields[key] === 'object') {
        //   for (const nestedKey in fields[key]) {
        //     if (fields[key][nestedKey] !== appointment[key][nestedKey]) {
        //       appointment[key][nestedKey] = fields[key][nestedKey];
        //     }
        //   }
        // } else {
        if (fields[key] !== appointment[key]) {
          if (key == 'doctorId') {
            await this.doctorService.findById(fields[key]);
          }
          if (key == 'patientId') {
            await this.patientService.findById(fields[key]);
          }
          appointment[key] = fields[key];
        }
        // }
      }
    }

    return await this.appointmentRepository.patch(appointment);
  }

  async delete(id: string) {
    await this.findById(id);
    await this.appointmentRepository.delete(id);
  }
}
