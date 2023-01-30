import React from 'react';
import { InputErrorStyled } from './styled';

export type InputErrorProps = {
  touched: boolean;
  error?: string;
};

const InputError: React.FC<InputErrorProps> = ({ touched, error }) => (
  <InputErrorStyled {...{ touched, error }}>{error}</InputErrorStyled>
);

export default InputError;