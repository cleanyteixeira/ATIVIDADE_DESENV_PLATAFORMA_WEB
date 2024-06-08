import { AppointmentEntity, AppointmentEntityProps } from '../entities';

export abstract class AppointmentRepository {
  abstract create(appointment: AppointmentEntity): Promise<AppointmentEntity>;
  abstract findById(id: string): Promise<AppointmentEntity | null>;
  abstract findByQuery(
    params: Partial<AppointmentEntityProps>,
  ): Promise<AppointmentEntity[] | null>;
  abstract findAll(): Promise<AppointmentEntity[] | null>;
  abstract patch(appointment: AppointmentEntity): Promise<AppointmentEntity>;
  abstract delete(id: string): Promise<void>;
}
