export interface UserEntityProps {
  name: string;
  password: string;
  email: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export class UserEntity {
  private _id: string;
  private props: UserEntityProps;

  constructor(props: UserEntityProps, id?: string) {
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

  public set password(password: string) {
    this.props.password = password;
  }
  public get password(): string {
    return this.props.password;
  }

  public set email(email: string) {
    this.props.email = email;
  }
  public get email(): string {
    return this.props.email;
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
