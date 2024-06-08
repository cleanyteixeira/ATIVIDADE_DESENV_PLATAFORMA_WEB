export interface PatientEntityProps {
  name: string;
  socialCode: string;
  birthdayDate: string;
  address: PatientAddressEntityProps;
  contact: PatientContactEntityProps;
  additionalData: PatientAdditionalDataEntityProps;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface PatientAddressEntityProps {
  streetAddress: string;
  city: string;
  state: string;
}

export interface PatientContactEntityProps {
  phone: string;
  phone2?: string;
  email: string;
}

export interface PatientAdditionalDataEntityProps {
  name: string;
  observation: string;
}

export class PatientEntity {
  private _id: string;
  private props: PatientEntityProps;

  constructor(props: PatientEntityProps, id?: string) {
    this.props = {
      ...props,
      updatedAt: new Date(),
    };

    if (id) {
      this._id = id;
    }
  }

  public set id(id: string) {
    this._id = id;
  }
  public get id(): string {
    return this._id;
  }

  public set name(name: string) {
    this.props.name = name;
  }
  public get name(): string {
    return this.props.name;
  }

  public set socialCode(socialCode: string) {
    this.props.socialCode = socialCode;
  }
  public get socialCode(): string {
    return this.props.socialCode;
  }

  public set birthdayDate(birthdayDate: string) {
    this.props.birthdayDate = birthdayDate;
  }
  public get birthdayDate(): string {
    return this.props.birthdayDate;
  }

  public set address(address: PatientAddressEntityProps) {
    this.props.address = address;
  }
  public get address(): PatientAddressEntityProps {
    return this.props.address;
  }

  public set contact(contact: PatientContactEntityProps) {
    this.props.contact = contact;
  }
  public get contact(): PatientContactEntityProps {
    return this.props.contact;
  }

  public set additionalData(additionalData: PatientAdditionalDataEntityProps) {
    this.props.additionalData = additionalData;
  }
  public get additionalData(): PatientAdditionalDataEntityProps {
    return this.props.additionalData;
  }

  public set createdAt(createdAt: Date) {
    this.props.createdAt = createdAt;
  }
  public get createdAt(): Date {
    return this.props.createdAt;
  }

  public set updatedAt(updatedAt: Date) {
    this.props.updatedAt = updatedAt;
  }
  public get updatedAt(): Date {
    return this.props.updatedAt;
  }
}
