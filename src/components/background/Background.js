import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: url('./crossword.png') repeat;
  /* background: var(--background-color); */
  min-height: 100vh;
  overflow-y: scroll;
`;

const Background = ({ children }) => {
  return (
    <Container>
      { children }
    </Container>
  );
}

export default Background;
