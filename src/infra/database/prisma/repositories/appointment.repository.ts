import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { AppointmentRepository } from 'src/app/repositories';
import { AppointmentMapper } from '../mappers';
import { AppointmentEntity, AppointmentEntityProps } from 'src/app/entities';

@Injectable()
export class PrismaAppointmentRepository implements AppointmentRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async findById(appointmentId: string) {
    const appointment = await this.prismaService.appointment.findUnique({
      where: {
        id_appointment: appointmentId,
      },
    });

    if (!appointment) {
      return null;
    }

    return AppointmentMapper.toDomain(appointment);
  }

  async findByQuery(
    params: Partial<AppointmentEntityProps>,
  ): Promise<AppointmentEntity[]> {
    const appointments = await this.prismaService.appointment.findMany({
      where: params,
    });
    return appointments.map(AppointmentMapper.toDomain);
  }

  async findAll() {
    const appointments = await this.prismaService.appointment.findMany();

    return appointments.map(AppointmentMapper.toDomain);
  }

  async create(appointment: AppointmentEntity) {
    const appointmentData = AppointmentMapper.toPrisma(appointment);

    const createdAppointment = await this.prismaService.appointment.create({
      data: appointmentData,
    });

    return AppointmentMapper.toDomain(createdAppointment);
  }

  async patch(appointment: AppointmentEntity): Promise<AppointmentEntity> {
    const appointmentData = AppointmentMapper.toPrisma(appointment);
    delete appointmentData.id_appointment;
    const updatedAppointment = await this.prismaService.appointment.update({
      where: {
        id_appointment: appointment.id,
      },
      data: appointmentData,
    });
    return AppointmentMapper.toDomain(updatedAppointment);
  }

  async delete(id: string): Promise<void> {
    await this.prismaService.appointment.delete({
      where: {
        id_appointment: id,
      },
    });
  }
}
