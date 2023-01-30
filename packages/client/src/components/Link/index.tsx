import React from 'react';
import { Link } from 'react-router-dom';
import { LinkStyled } from './styled';

type Props = {
  to: string;
  text: string;
}

const CustomLink: React.FC<Props> = (props) => (
  <LinkStyled>
    <Link to={props.to}>{props.text}</Link>
  </LinkStyled >
);

export default CustomLink;