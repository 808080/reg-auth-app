import styled from 'styled-components';
import { C_PRIMARY } from '../../styles/constants';

export const ButtonStyled = styled.div<{ disabled?: boolean }>`
  display: flex;
  justify-content: center;
  margin: 30px 0;
  .btn {
    cursor: pointer;
    min-width: 100px;
    border-radius: 8px;
    background-color: #fff;
    border: 2px solid ${C_PRIMARY};
    color: ;
    padding: 10px 14px;
    pointer-events: ${props => (props.disabled ? 'none' : 'auto')};
    font-size: 18px;
    text-decoration: none;
    text-align: center;
    transition: .3s;
    &:hover {
      background-color: ${C_PRIMARY};
      color: #fff;
    }
  }
`;