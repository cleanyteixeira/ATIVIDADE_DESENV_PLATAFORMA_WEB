import { IsEmail, IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class FindUserByIdDto {
  @IsString()
  @IsUUID()
  id: string;
}

export class FindUserByEmailDto {
  @IsEmail()
  email: string;
}

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}

export class UserDto {
  id: string;
  name: string;
  email: string;
  password?: string;
  updatedAt: Date;
  createdAt: Date;
}
