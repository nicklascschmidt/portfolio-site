import React from "react";
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  margin-bottom: 1rem;
`;

const UnderlineText = styled.h2`
  ${props => props.isWhite && `
    color: var(--light-text-color);
    text-shadow: 0 2px 3px var(--body-text-color);
  `};

  display: inline-block;
  &:after {
    content: '';
    display: block;
    border-top: 2px solid var(--hr-color);
    margin-top: 0.5rem;
  }
`;

const SectionHeader = ({ id, title, isWhite=false }) => {
  return (
    <Container id={ id }>
      <UnderlineText isWhite={isWhite}>{ title }</UnderlineText>
    </Container>
  );
}

export default SectionHeader;
