import { RegData } from "../../store/reducers/user";

type RegInputs = {
  label: string, type: string, name: keyof RegData
}[];

export const inputs: RegInputs = [
  {
    label: 'Email',
    type: 'email',
    name: 'email',
  },
  {
    label: 'Full name',
    type: 'text',
    name: 'name',
  },
  {
    label: 'Password',
    type: 'password',
    name: 'password',
  },
];

export const initialValues: RegData = {
  email: '',
  password: '',
  name: ''
};