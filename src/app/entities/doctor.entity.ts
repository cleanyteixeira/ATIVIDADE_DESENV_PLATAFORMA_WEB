export interface DoctorEntityProps {
  name: string;
  socialCode: string;
  birthdayDate: string;
  address: DoctorAddressEntityProps;
  contact: DoctorContactEntityProps;
  additionalData: DoctorAdditionalDataEntityProps;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface DoctorAddressEntityProps {
  streetAddress: string;
  city: string;
  state: string;
}

export interface DoctorContactEntityProps {
  phone: string;
  phone2?: string;
  email: string;
}

export interface DoctorAdditionalDataEntityProps {
  specialty: string;
  register: string;
  acceptedHealthInsurance: string;
}

export class DoctorEntity {
  private _id: string;
  private props: DoctorEntityProps;

  constructor(props: DoctorEntityProps, id?: string) {
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

  public set address(address: DoctorAddressEntityProps) {
    this.props.address = address;
  }
  public get address(): DoctorAddressEntityProps {
    return this.props.address;
  }

  public set contact(contact: DoctorContactEntityProps) {
    this.props.contact = contact;
  }
  public get contact(): DoctorContactEntityProps {
    return this.props.contact;
  }

  public set additionalData(additionalData: DoctorAdditionalDataEntityProps) {
    this.props.additionalData = additionalData;
  }
  public get additionalData(): DoctorAdditionalDataEntityProps {
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
