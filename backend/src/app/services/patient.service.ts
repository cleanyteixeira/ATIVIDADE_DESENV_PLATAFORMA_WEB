import { Injectable, NotFoundException } from '@nestjs/common';
import { PatientRepository } from '../repositories';
import { PatientEntity, PatientEntityProps } from '../entities';

@Injectable()
export class PatientService {
  constructor(private readonly patientRepository: PatientRepository) {}

  async findById(patientId: string) {
    const patient = await this.patientRepository.findById(patientId);

    if (!patient) {
      throw new NotFoundException(`Patient with id ${patientId} not found`);
    }

    return patient;
  }

  async findAll() {
    const patients = await this.patientRepository.findAll();
    return patients;
  }

  async create(patientProps: PatientEntityProps) {
    const patient = new PatientEntity(patientProps);
    const createPatient = await this.patientRepository.create(patient);
    return createPatient;
  }

  async patch(id: string, fields: Partial<PatientEntityProps>) {
    const patient = await this.findById(id);

    for (const key in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, key)) {
        if (['id', 'createdAt', 'updatedAt'].includes(key)) {
          continue;
        }
        if (typeof fields[key] === 'object') {
          for (const nestedKey in fields[key]) {
            if (fields[key][nestedKey] !== patient[key][nestedKey]) {
              patient[key][nestedKey] = fields[key][nestedKey];
            }
          }
        } else {
          if (fields[key] !== patient[key]) {
            patient[key] = fields[key];
          }
        }
      }
    }

    return await this.patientRepository.patch(patient);
  }

  async delete(id: string) {
    await this.findById(id);
    await this.patientRepository.delete(id);
  }
}
