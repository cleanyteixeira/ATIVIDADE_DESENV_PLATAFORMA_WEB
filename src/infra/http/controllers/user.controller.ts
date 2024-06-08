import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';
import { UserService } from 'src/app/services';
import { CreateUserDto, FindUserByIdDto } from '../dtos';
import { Response } from 'express';
import { UserMapper } from '../mappers';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  async findById(@Res() res: Response, @Param() param: FindUserByIdDto) {
    const { id } = param;
    const user = await this.userService.findById(id);
    res.status(HttpStatus.OK).json(UserMapper.toDto(user));
    return res;
  }

  @Get()
  async findAll(@Res() res: Response) {
    const users = await this.userService.findAll();
    res.status(HttpStatus.OK).json(users.map(UserMapper.toDto));
    return res;
  }

  @Post()
  async create(@Res() res: Response, @Body() body: CreateUserDto) {
    const user = await this.userService.create(body);
    res
      .status(HttpStatus.CREATED)
      .setHeader('Location', `/${user.id}`)
      .json(UserMapper.toDto(user));
    return res;
  }

  @Patch(':id')
  async patch(
    @Res() res: Response,
    @Param() param: FindUserByIdDto,
    @Body() body: Partial<CreateUserDto>,
  ) {
    const { id } = param;
    const user = await this.userService.patch(id, body);
    res
      .status(HttpStatus.OK)
      .setHeader('Location', `/${user.id}`)
      .json(UserMapper.toDto(user));
    return res;
  }

  @Delete(':id')
  async delete(@Res() res: Response, @Param() param: FindUserByIdDto) {
    const { id } = param;
    await this.userService.delete(id);
    res.status(HttpStatus.NO_CONTENT).json();
    return res;
  }
}
