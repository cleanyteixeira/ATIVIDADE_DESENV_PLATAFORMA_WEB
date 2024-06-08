import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { UserRepository } from 'src/app/repositories';
import { UserMapper } from '../mappers';
import { UserEntity } from 'src/app/entities';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async findById(userId: string) {
    const user = await this.prismaService.user.findUnique({
      where: {
        id_user: userId,
      },
    });

    if (!user) {
      return null;
    }

    return UserMapper.toDomain(user);
  }

  async findByEmail(userEmail: string) {
    const user = await this.prismaService.user.findFirst({
      where: {
        email: userEmail,
      },
    });

    if (!user) {
      return null;
    }

    return UserMapper.toDomain(user);
  }

  async findAll() {
    const users = await this.prismaService.user.findMany();

    return users.map(UserMapper.toDomain);
  }

  async create(user: UserEntity) {
    const userData = UserMapper.toPrisma(user);

    const createdUser = await this.prismaService.user.create({
      data: userData,
    });

    return UserMapper.toDomain(createdUser);
  }

  async patch(user: UserEntity): Promise<UserEntity> {
    const userData = UserMapper.toPrisma(user);
    delete userData.id_user;
    const updatedUser = await this.prismaService.user.update({
      where: {
        id_user: user.id,
      },
      data: userData,
    });
    return UserMapper.toDomain(updatedUser);
  }

  async delete(id: string): Promise<void> {
    await this.prismaService.user.delete({
      where: {
        id_user: id,
      },
    });
  }
}
