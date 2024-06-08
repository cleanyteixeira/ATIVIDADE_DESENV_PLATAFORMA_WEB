import { Doctor as DoctorPrisma } from '@prisma/client';
import { DoctorEntity } from 'src/app/entities';

export class DoctorMapper {
  static toDomain(doctor: DoctorPrisma): DoctorEntity {
    return new DoctorEntity(
      {
        name: doctor.name,
        birthdayDate: doctor.birthday_date,
        socialCode: doctor.social_code,
        address: {
          streetAddress: doctor.address.street_address,
          city: doctor.address.city,
          state: doctor.address.state,
        },
        contact: {
          email: doctor.contact.email,
          phone: doctor.contact.phone,
          phone2: doctor.contact.phone_2,
        },
        additionalData: {
          specialty: doctor.additional_data.specialty,
          register: doctor.additional_data.register,
          acceptedHealthInsurance:
            doctor.additional_data.accepted_health_insurance,
        },
        createdAt: doctor.created_at,
        updatedAt: doctor.updated_at,
      },
      doctor.id_doctor,
    );
  }

  static toPrisma(doctor: DoctorEntity): DoctorPrisma {
    return {
      id_doctor: doctor.id,
      name: doctor.name,
      social_code: doctor.socialCode,
      birthday_date: doctor.birthdayDate,
      address: {
        street_address: doctor.address.streetAddress,
        city: doctor.address.city,
        state: doctor.address.state,
      },
      contact: {
        email: doctor.contact.email,
        phone: doctor.contact.phone,
        phone_2: doctor.contact.phone2,
      },
      additional_data: {
        specialty: doctor.additionalData.specialty,
        register: doctor.additionalData.register,
        accepted_health_insurance:
          doctor.additionalData.acceptedHealthInsurance,
      },
      created_at: doctor.createdAt,
      updated_at: doctor.updatedAt,
    };
  }
}
