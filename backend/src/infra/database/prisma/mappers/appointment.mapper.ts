import { Appointment as AppointmentPrisma } from '@prisma/client';
import { AppointmentEntity } from 'src/app/entities';

export class AppointmentMapper {
  static toDomain(appointment: AppointmentPrisma): AppointmentEntity {
    return new AppointmentEntity(
      {
        date: appointment.date,
        doctorId: appointment.doctor_id,
        patientId: appointment.patient_id,
        status: appointment.status,
        type: appointment.type,
        createdAt: appointment.created_at,
        updatedAt: appointment.updated_at,
      },
      appointment.id_appointment,
    );
  }

  static toPrisma(appointment: AppointmentEntity): AppointmentPrisma {
    return {
      id_appointment: appointment.id,
      date: appointment.date,
      doctor_id: appointment.doctorId,
      patient_id: appointment.patientId,
      status: appointment.status,
      type: appointment.type,
      created_at: appointment.createdAt,
      updated_at: appointment.updatedAt,
    };
  }
}
