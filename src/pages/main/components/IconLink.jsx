import React from "react";
import styled from 'styled-components';

const Link = styled.a`
  & > * {
    transition: all .2s;
    transform-origin: 50% 50%;
    
    &:hover {
      transform: scale(1.1);
    }
  }
`;

const IconLink = ({ hrefLink, title, className, children }) => {
  return (
    <Link
      className={className}
      href={hrefLink}
      title={title}
      target='_blank'
      rel="noopener noreferrer"
    >
      { children }
    </Link>
  );
}

export default IconLink;
