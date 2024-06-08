import { AppointmentEntity } from 'src/app/entities';
import { AppointmentDto } from '../dtos';

export class AppointmentMapper {
  static toDto(user: AppointmentEntity): AppointmentDto {
    return {
      id: user.id,
      date: user.date,
      doctorId: user.doctorId,
      patientId: user.patientId,
      status: user.status,
      type: user.type,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }
}
