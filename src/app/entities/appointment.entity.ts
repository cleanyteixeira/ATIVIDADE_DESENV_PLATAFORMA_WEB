export interface AppointmentEntityProps {
  date: string;
  status: string;
  type: string;
  doctorId: string;
  patientId: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export class AppointmentEntity {
  private _id: string;
  private props: AppointmentEntityProps;

  constructor(props: AppointmentEntityProps, id?: string) {
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

  public set date(date: string) {
    this.props.date = date;
  }
  public get date(): string {
    return this.props.date;
  }

  public set status(status: string) {
    this.props.status = status;
  }
  public get status(): string {
    return this.props.status;
  }

  public set type(type: string) {
    this.props.type = type;
  }
  public get type(): string {
    return this.props.type;
  }

  public set doctorId(doctorId: string) {
    this.props.doctorId = doctorId;
  }
  public get doctorId(): string {
    return this.props.doctorId;
  }

  public set patientId(patientId: string) {
    this.props.patientId = patientId;
  }
  public get patientId(): string {
    return this.props.patientId;
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
