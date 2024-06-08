import { DoctorEntity } from 'src/app/entities';
import { DoctorDto } from '../dtos';

export class DoctorMapper {
  static toDto(user: DoctorEntity): DoctorDto {
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
        specialty: user.additionalData.specialty,
        register: user.additionalData.register,
        acceptedHealthInsurance: user.additionalData.acceptedHealthInsurance,
      },
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }
}
