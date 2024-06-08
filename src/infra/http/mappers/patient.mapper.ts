import { PatientEntity } from 'src/app/entities';
import { PatientDto } from '../dtos';

export class PatientMapper {
  static toDto(user: PatientEntity): PatientDto {
    return {
      id: user.id,
      name: user.name,
      socialCode: user.socialCode,
      birthdayDate: user.birthdayDate,
      address: {
        city: user.address.city,
        state: user.address.state,
        streetAddress: user.address.streetAddress,
      },
      contact: {
        email: user.contact.email,
        phone: user.contact.phone,
        phone2: user.contact.phone2,
      },
      additionalData: {
        name: user.additionalData.name,
        observation: user.additionalData.observation,
      },
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }
}
