import React from "react";
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
`;

const SectionFooter = ({ children, id }) => {
  return (
    <Container id={id}>
      { children }
    </Container>
  );
}

export default SectionFooter;
