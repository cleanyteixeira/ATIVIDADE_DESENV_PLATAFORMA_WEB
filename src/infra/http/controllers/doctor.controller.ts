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
import { DoctorService } from 'src/app/services';
import { CreateDoctorDto, FindDoctorByIdDto } from '../dtos';
import { Response } from 'express';
import { DoctorMapper } from '../mappers';

@Controller('doctors')
export class DoctorController {
  constructor(private readonly doctorService: DoctorService) {}

  @Get(':id')
  async findById(@Res() res: Response, @Param() param: FindDoctorByIdDto) {
    const { id } = param;
    const doctor = await this.doctorService.findById(id);
    res.status(HttpStatus.OK).json(DoctorMapper.toDto(doctor));
    return res;
  }

  @Get()
  async findAll(@Res() res: Response) {
    const doctors = await this.doctorService.findAll();
    res.status(HttpStatus.OK).json(doctors.map(DoctorMapper.toDto));
    return res;
  }

  @Post()
  async create(@Res() res: Response, @Body() body: CreateDoctorDto) {
    const doctor = await this.doctorService.create(body);
    res
      .status(HttpStatus.CREATED)
      .setHeader('Location', `/${doctor.id}`)
      .json(DoctorMapper.toDto(doctor));
    return res;
  }

  @Patch(':id')
  async patch(
    @Res() res: Response,
    @Param() param: FindDoctorByIdDto,
    @Body() body: Partial<CreateDoctorDto>,
  ) {
    const { id } = param;
    const doctor = await this.doctorService.patch(id, body);
    res
      .status(HttpStatus.OK)
      .setHeader('Location', `/${doctor.id}`)
      .json(DoctorMapper.toDto(doctor));
    return res;
  }

  @Delete(':id')
  async delete(@Res() res: Response, @Param() param: FindDoctorByIdDto) {
    const { id } = param;
    await this.doctorService.delete(id);
    res.status(HttpStatus.NO_CONTENT).json();
    return res;
  }
}
