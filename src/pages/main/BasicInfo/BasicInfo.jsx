import React from "react";
import styled from 'styled-components';

import IconLink from '../components/IconLink.jsx';
import linkData from './BasicInfo.data';

const Container = styled.header`
  height: 100vh;
  padding: 4rem 2rem;
  text-align: center;
  color: var(--light-text-color);
  text-shadow: 0 2px 3px var(--body-text-color);

  & > * {
    margin-bottom: .5rem;
  }

  hr, nav {
    width: 220px;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }
    h3 {
      font-size: 1.5rem;
    }
    hr, nav {
      width: 188px;
    }
  }
`;

const IconContainer = styled.div`
  margin-top: 1rem;
  & > * {
    margin: 0 .5rem;
  }
`;

const Line = styled.hr`
  height: 2px;
  margin-left: auto;
  margin-right: auto;
  
  background-color: var(--light-text-color);
  filter: drop-shadow(0 1px 3px var(--body-text-color));
`;

const NavContainer = styled.nav`
  width: 188px;
  display: flex;
  justify-content: space-around;
  margin: auto;

  color: var(--light-text-color);
  text-shadow: 0 2px 3px var(--body-text-color);
`;

const BasicInfo = () => {
  return (
    <Container>
      <h1>Nicklas Chen Schmidt</h1>
      <h3>Frontend Engineer</h3>
      <IconContainer>
        {linkData.map((item, idx) => {
          const { hrefLink, title, icon } = item;
          return (
            <IconLink
              key={`jumbotron-icon-link-${idx}`}
              hrefLink={hrefLink}
              title={title}
            >
              { icon }
            </IconLink>
          );
        })}
      </IconContainer>
      <Line />
      <NavContainer>
        <a href="/#about" className='noStyle'>
          <h6>About</h6>
        </a>
        <a href="/#projects" className='noStyle'>
          <h6>Projects</h6>
        </a>
        <a href="/#contact" className='noStyle'>
          <h6>Contact</h6>
        </a>
      </NavContainer>
    </Container>
  );
};

export default BasicInfo;
