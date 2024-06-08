import { Injectable } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  async onModuleInit() {
    await this.$connect();
  }

  catchPrismaError<T>(error: Error, document: T) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2002') {
        throw `Chave primária violada. Documento => \'${document}\'`;
      }
      if (error.code === 'P2025') {
        throw `Operação depende de um registro não encontrado. Documento => \'${document}\'`;
      }
    }
    if (error instanceof Prisma.PrismaClientValidationError) {
      throw `Erro de validação, por favor verifique o documento. Documento => \'${document}\'`;
    }
    throw error.message;
  }
}
