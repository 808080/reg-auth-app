import styled from 'styled-components';
import { InputErrorProps } from '.';

export const InputErrorStyled = styled.div<InputErrorProps>`
  display: ${props => (props.touched && props.error ? 'block' : 'none')};
  color: #e60c0c;
`;