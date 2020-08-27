import React from "react";
import styled from 'styled-components';
import JumbotronInfo from './JumbotronInfo';
import AboutMe from '../aboutMe/AboutMe';

const StyledJumbotron = styled.div`
  ${props => props.isMain
    ? `
      display: grid;
      grid-template-columns: min-content 1fr;
      grid-column-gap: 4rem;

      max-width: 1140px;
      margin: 0 auto;

      @media (max-width: 768px) {
        grid-template-rows: repeat(2, min-content);
        grid-row-gap: 1rem;
        grid-template-columns: none;
      }
    `
    : `
      background-color: var(--jumbotron-color);
      box-shadow: 0px 1px 3px 0px var(--jumbotron-color);
      margin-bottom: 1rem;
    `
  };
`;

const Jumbotron = (props) => {
  const { isMain = false } = props;

  return (
    <StyledJumbotron className='p-3' isMain={isMain}>
      <JumbotronInfo {...props} />
      {isMain && <AboutMe />}
    </StyledJumbotron>
  );
};

export default Jumbotron;
