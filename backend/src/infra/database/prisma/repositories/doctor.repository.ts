import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { DoctorRepository } from 'src/app/repositories';
import { DoctorMapper } from '../mappers';
import { DoctorEntity } from 'src/app/entities';

@Injectable()
export class PrismaDoctorRepository implements DoctorRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async findById(doctorId: string) {
    const doctor = await this.prismaService.doctor.findUnique({
      where: {
        id_doctor: doctorId,
      },
    });

    if (!doctor) {
      return null;
    }

    return DoctorMapper.toDomain(doctor);
  }

  async findAll() {
    const doctors = await this.prismaService.doctor.findMany();

    return doctors.map(DoctorMapper.toDomain);
  }

  async create(doctor: DoctorEntity) {
    const doctorData = DoctorMapper.toPrisma(doctor);

    const createdDoctor = await this.prismaService.doctor.create({
      data: doctorData,
    });

    return DoctorMapper.toDomain(createdDoctor);
  }

  async patch(doctor: DoctorEntity): Promise<DoctorEntity> {
    const doctorData = DoctorMapper.toPrisma(doctor);
    delete doctorData.id_doctor;
    const updatedDoctor = await this.prismaService.doctor.update({
      where: {
        id_doctor: doctor.id,
      },
      data: doctorData,
    });
    return DoctorMapper.toDomain(updatedDoctor);
  }

  async delete(id: string): Promise<void> {
    await this.prismaService.doctor.delete({
      where: {
        id_doctor: id,
      },
    });
  }
}
