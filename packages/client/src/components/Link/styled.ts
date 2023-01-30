import styled from 'styled-components';
import { C_PRIMARY_DARK } from '../../styles/constants';

export const LinkStyled = styled.div`
text-align: center;
padding: 10px;
a {
  color: ${C_PRIMARY_DARK};
  font-size: 18px;

  &:hover {
    text-decoration: none;
  }
}
`;