export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
}

export interface Props {
  user: IUser;
}
