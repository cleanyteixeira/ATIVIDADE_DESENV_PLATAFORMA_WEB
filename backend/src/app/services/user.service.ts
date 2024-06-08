import { Injectable, NotFoundException } from '@nestjs/common';
import { UserRepository } from '../repositories';
import { UserEntity, UserEntityProps } from '../entities';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async findById(userId: string) {
    const user = await this.userRepository.findById(userId);

    if (!user) {
      throw new NotFoundException(`User with id ${userId} not found`);
    }

    return user;
  }

  async findByEmail(email: string) {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new NotFoundException(`User with email ${email} not found`);
    }

    return user;
  }

  async findAll() {
    const users = await this.userRepository.findAll();
    return users;
  }

  async create(userProps: UserEntityProps) {
    const user = new UserEntity(userProps);
    const createUser = await this.userRepository.create(user);
    return createUser;
  }

  async patch(id: string, fields: Partial<UserEntityProps>) {
    const user = await this.findById(id);

    for (const key in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, key)) {
        if (['id', 'createdAt', 'updatedAt'].includes(key)) {
          continue;
        }
        if (fields[key] !== user[key]) {
          user[key] = fields[key];
        }
      }
    }

    return await this.userRepository.patch(user);
  }

  async delete(id: string) {
    await this.findById(id);
    await this.userRepository.delete(id);
  }
}
