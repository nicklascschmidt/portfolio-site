import React from "react";
import styled from 'styled-components';
import JumbotronInfo from './JumbotronInfo';

const StyledJumbotron = styled.div`
  background-color: var(--jumbotron-color);
  box-shadow: 0px 1px 3px 0px var(--jumbotron-color);
  margin-bottom: 1rem;
`;

const Jumbotron = (props) => {
  return (
    <StyledJumbotron className='p-3'>
      <JumbotronInfo {...props} />
    </StyledJumbotron>
  );
};

export default Jumbotron;
