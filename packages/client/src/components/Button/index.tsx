import React, { ButtonHTMLAttributes } from 'react';
import { ButtonStyled } from './styled';

export type Props = {
  text: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<Props> = (props) => (
  <ButtonStyled disabled={props.disabled}>
    <button {...props} className='btn'>{props.text}</button>
  </ButtonStyled >
);

export default Button;