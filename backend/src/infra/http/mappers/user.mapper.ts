import { UserEntity } from 'src/app/entities';
import { UserDto } from '../dtos';

export class UserMapper {
  static toDto(user: UserEntity): UserDto {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }
}
