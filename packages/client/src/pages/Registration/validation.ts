import { RegData } from '../../store/reducers/user';
import {
  isEmpty,
  isEmail,
  isPassword,
  isValidMinLength
} from '../../utils/validators';

const validate = (values: RegData) => {
  const errors = {} as typeof values;

  let key: keyof typeof values;
  for (key in values) {
    if (isEmpty(values[key])) {
      errors[key] = 'Required';
    }
  }

  if (!isValidMinLength(5)(values.name)) {
    errors.name = 'Full name must be at least 5 characters long';
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