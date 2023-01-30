import { LoginData } from '../../store/reducers/user';
import {
  isEmpty,
  isEmail,
  isPassword,
} from '../../utils/validators';

const validate = (values: LoginData) => {
  const errors = {} as typeof values;

  let key: keyof typeof values;
  for (key in values) {
    if (isEmpty(values[key])) {
      errors[key] = 'Required';
    }
  }

  if (!isEmail(values.email)) {
    errors.email = 'Invalid e-mail';
  }

  if (!isPassword(values.password)) {
    errors.password = 'Min length is 8 symbols. Password must contain atleast one digit, one character and no whitespaces';
  }

  return errors;
};

export default validate;