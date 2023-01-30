import React, { InputHTMLAttributes } from 'react';
import { InputStyled } from './styled';
import InputError, { InputErrorProps } from '../InputError';

export type Props = {
  label: string;
} & InputErrorProps & InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<Props> = ({ touched, error, ...props }) => (
  <InputStyled>
    <label className='input' htmlFor={props.name}>
      <input {...props} id={props.name} className='input__field' />
      <span className='input__label'>{props.label}</span>
    </label>
    <InputError {...{ touched, error }} />
  </InputStyled>
);

export default Input;