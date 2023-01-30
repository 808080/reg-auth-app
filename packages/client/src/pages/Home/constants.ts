import { LoginData } from "../../store/reducers/user";

export const inputs: { label: string, type: string, name: keyof LoginData }[] = [
  {
    label: 'Email',
    type: 'email',
    name: 'email',
  },
  {
    label: 'Password',
    type: 'password',
    name: 'password',
  },
];

export const initialValues: LoginData = {
  email: '',
  password: '',
};