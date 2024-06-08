import { Injectable, NotFoundException } from '@nestjs/common';
import { DoctorRepository } from '../repositories';
import { DoctorEntity, DoctorEntityProps } from '../entities';

@Injectable()
export class DoctorService {
  constructor(private readonly doctorRepository: DoctorRepository) {}

  async findById(doctorId: string) {
    const doctor = await this.doctorRepository.findById(doctorId);

    if (!doctor) {
      throw new NotFoundException(`Doctor with id ${doctorId} not found`);
    }

    return doctor;
  }

  async findAll() {
    const doctors = await this.doctorRepository.findAll();
    return doctors;
  }

  async create(doctorProps: DoctorEntityProps) {
    const doctor = new DoctorEntity(doctorProps);
    const createDoctor = await this.doctorRepository.create(doctor);
    return createDoctor;
  }

  async patch(id: string, fields: Partial<DoctorEntityProps>) {
    const doctor = await this.findById(id);

    for (const key in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, key)) {
        if (['id', 'createdAt', 'updatedAt'].includes(key)) {
          continue;
        }
        if (typeof fields[key] === 'object') {
          for (const nestedKey in fields[key]) {
            if (fields[key][nestedKey] !== doctor[key][nestedKey]) {
              doctor[key][nestedKey] = fields[key][nestedKey];
            }
          }
        } else {
          if (fields[key] !== doctor[key]) {
            doctor[key] = fields[key];
          }
        }
      }
    }

    return await this.doctorRepository.patch(doctor);
  }

  async delete(id: string) {
    await this.findById(id);
    await this.doctorRepository.delete(id);
  }
}
