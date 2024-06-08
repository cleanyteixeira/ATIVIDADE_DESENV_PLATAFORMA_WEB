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
import { PatientService } from 'src/app/services';
import { CreatePatientDto, FindPatientByIdDto } from '../dtos';
import { Response } from 'express';
import { PatientMapper } from '../mappers';

@Controller('patients')
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @Get(':id')
  async findById(@Res() res: Response, @Param() param: FindPatientByIdDto) {
    const { id } = param;
    const patient = await this.patientService.findById(id);
    res.status(HttpStatus.OK).json(PatientMapper.toDto(patient));
    return res;
  }

  @Get()
  async findAll(@Res() res: Response) {
    const patients = await this.patientService.findAll();
    res.status(HttpStatus.OK).json(patients.map(PatientMapper.toDto));
    return res;
  }

  @Post()
  async create(@Res() res: Response, @Body() body: CreatePatientDto) {
    const patient = await this.patientService.create(body);
    res
      .status(HttpStatus.CREATED)
      .setHeader('Location', `/${patient.id}`)
      .json(PatientMapper.toDto(patient));
    return res;
  }

  @Patch(':id')
  async patch(
    @Res() res: Response,
    @Param() param: FindPatientByIdDto,
    @Body() body: Partial<CreatePatientDto>,
  ) {
    const { id } = param;
    const patient = await this.patientService.patch(id, body);
    res
      .status(HttpStatus.OK)
      .setHeader('Location', `/${patient.id}`)
      .json(PatientMapper.toDto(patient));
    return res;
  }

  @Delete(':id')
  async delete(@Res() res: Response, @Param() param: FindPatientByIdDto) {
    const { id } = param;
    await this.patientService.delete(id);
    res.status(HttpStatus.NO_CONTENT).json();
    return res;
  }
}
