import { Patient as PatientPrisma } from '@prisma/client';
import { PatientEntity } from 'src/app/entities';

export class PatientMapper {
  static toDomain(patient: PatientPrisma): PatientEntity {
    return new PatientEntity(
      {
        name: patient.name,
        birthdayDate: patient.birthday_date,
        socialCode: patient.social_code,
        address: {
          streetAddress: patient.address.street_address,
          city: patient.address.city,
          state: patient.address.state,
        },
        contact: {
          email: patient.contact.email,
          phone: patient.contact.phone,
          phone2: patient.contact.phone_2,
        },
        additionalData: {
          name: patient.additional_data.name,
          observation: patient.additional_data.observation,
        },
        createdAt: patient.created_at,
        updatedAt: patient.updated_at,
      },
      patient.id_patient,
    );
  }

  static toPrisma(patient: PatientEntity): PatientPrisma {
    return {
      id_patient: patient.id,
      name: patient.name,
      social_code: patient.socialCode,
      birthday_date: patient.birthdayDate,
      address: {
        street_address: patient.address.streetAddress,
        city: patient.address.city,
        state: patient.address.state,
      },
      contact: {
        email: patient.contact.email,
        phone: patient.contact.phone,
        phone_2: patient.contact.phone2,
      },
      additional_data: {
        name: patient.additionalData.name,
        observation: patient.additionalData.observation,
      },
      created_at: patient.createdAt,
      updated_at: patient.updatedAt,
    };
  }
}
