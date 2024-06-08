import { DoctorEntity } from '../entities';

export abstract class DoctorRepository {
  abstract create(doctor: DoctorEntity): Promise<DoctorEntity>;
  abstract findById(id: string): Promise<DoctorEntity | null>;
  abstract findAll(): Promise<DoctorEntity[] | null>;
  abstract patch(doctor: DoctorEntity): Promise<DoctorEntity>;
  abstract delete(id: string): Promise<void>;
}
