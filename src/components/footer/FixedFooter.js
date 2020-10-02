import React, { Component } from "react";
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  z-index: -1;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1rem;

  font-size: 14px;
  color: var(--light-text-color);
  background-color: var(--nav-color);
  text-align: right;
  
  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

const Link = styled.a`
  &:hover {
    color: var(--light-text-color);
  }
`;

class FixedFooter extends Component {
  render() {
    return (
      <Container>
        <span>
          <Link
            href='https://github.com/nicklascschmidt/portfolio-site'
            target='_blank'
            rel='noopener noreferrer'
          >
            Built and Designed
          </Link>
          {` by Nicklas Chen Schmidt © 2020`}
        </span>
      </Container>
    );
  }
}

export default FixedFooter;
