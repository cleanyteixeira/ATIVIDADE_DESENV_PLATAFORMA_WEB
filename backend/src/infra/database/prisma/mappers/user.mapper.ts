import { User as UserPrisma } from '@prisma/client';
import { UserEntity } from 'src/app/entities';

export class UserMapper {
  static toDomain(user: UserPrisma): UserEntity {
    return new UserEntity(
      {
        name: user.name,
        email: user.email,
        password: user.password,
        createdAt: user.created_at,
        updatedAt: user.updated_at,
      },
      user.id_user,
    );
  }

  static toPrisma(user: UserEntity): UserPrisma {
    return {
      id_user: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
      created_at: user.createdAt,
      updated_at: user.updatedAt,
    };
  }
}
