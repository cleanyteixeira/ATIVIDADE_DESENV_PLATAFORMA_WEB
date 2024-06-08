import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
  Res,
} from '@nestjs/common';
import { AppointmentService } from 'src/app/services';
import {
  CreateAppointmentDto,
  FindAppointmentByIdDto,
  QueryAppointmentDto,
} from '../dtos';
import { Response } from 'express';
import { AppointmentMapper } from '../mappers';

@Controller('appointments')
export class AppointmentController {
  constructor(private readonly appointmentService: AppointmentService) {}

  @Get(':id')
  async findById(@Res() res: Response, @Param() param: FindAppointmentByIdDto) {
    const { id } = param;
    const appointment = await this.appointmentService.findById(id);
    res.status(HttpStatus.OK).json(AppointmentMapper.toDto(appointment));
    return res;
  }

  @Get()
  async findAll(@Res() res: Response, @Query() query?: QueryAppointmentDto) {
    const appointments = !!Object.keys(query).length
      ? await this.appointmentService.findByQuery(query)
      : await this.appointmentService.findAll();
    res.status(HttpStatus.OK).json(appointments.map(AppointmentMapper.toDto));
    return res;
  }

  @Post()
  async create(@Res() res: Response, @Body() body: CreateAppointmentDto) {
    const appointment = await this.appointmentService.create(body);
    res
      .status(HttpStatus.CREATED)
      .setHeader('Location', `/${appointment.id}`)
      .json(AppointmentMapper.toDto(appointment));
    return res;
  }

  @Patch(':id')
  async patch(
    @Res() res: Response,
    @Param() param: FindAppointmentByIdDto,
    @Body() body: Partial<CreateAppointmentDto>,
  ) {
    const { id } = param;
    const appointment = await this.appointmentService.patch(id, body);
    res
      .status(HttpStatus.OK)
      .setHeader('Location', `/${appointment.id}`)
      .json(AppointmentMapper.toDto(appointment));
    return res;
  }

  @Delete(':id')
  async delete(@Res() res: Response, @Param() param: FindAppointmentByIdDto) {
    const { id } = param;
    await this.appointmentService.delete(id);
    res.status(HttpStatus.NO_CONTENT).json();
    return res;
  }
}
