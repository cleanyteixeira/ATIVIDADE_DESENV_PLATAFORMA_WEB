import { PatientEntity } from '../entities';

export abstract class PatientRepository {
  abstract create(patient: PatientEntity): Promise<PatientEntity>;
  abstract findById(id: string): Promise<PatientEntity | null>;
  abstract findAll(): Promise<PatientEntity[] | null>;
  abstract patch(patient: PatientEntity): Promise<PatientEntity>;
  abstract delete(id: string): Promise<void>;
}
