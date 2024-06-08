import { UserEntity } from '../entities';

export abstract class UserRepository {
  abstract create(user: UserEntity): Promise<UserEntity>;
  abstract findById(id: string): Promise<UserEntity | null>;
  abstract findByEmail(email: string): Promise<UserEntity | null>;
  abstract findAll(): Promise<UserEntity[] | null>;
  abstract patch(user: UserEntity): Promise<UserEntity>;
  abstract delete(id: string): Promise<void>;
}
