import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { PatientRepository } from 'src/app/repositories';
import { PatientMapper } from '../mappers';
import { PatientEntity } from 'src/app/entities';

@Injectable()
export class PrismaPatientRepository implements PatientRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async findById(patientId: string) {
    const patient = await this.prismaService.patient.findUnique({
      where: {
        id_patient: patientId,
      },
    });

    if (!patient) {
      return null;
    }

    return PatientMapper.toDomain(patient);
  }

  async findAll() {
    const patients = await this.prismaService.patient.findMany();

    return patients.map(PatientMapper.toDomain);
  }

  async create(patient: PatientEntity) {
    const patientData = PatientMapper.toPrisma(patient);

    const createdPatient = await this.prismaService.patient.create({
      data: patientData,
    });

    return PatientMapper.toDomain(createdPatient);
  }

  async patch(patient: PatientEntity): Promise<PatientEntity> {
    const patientData = PatientMapper.toPrisma(patient);
    delete patientData.id_patient;
    const updatedPatient = await this.prismaService.patient.update({
      where: {
        id_patient: patient.id,
      },
      data: patientData,
    });
    return PatientMapper.toDomain(updatedPatient);
  }

  async delete(id: string): Promise<void> {
    await this.prismaService.patient.delete({
      where: {
        id_patient: id,
      },
    });
  }
}
