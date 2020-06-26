import React from "react";
import styled from 'styled-components';

const Container = styled.div`
  color: var(--light-text-color);
  background-color: var(--nav-color);
  text-align: right;
`;

const Link = styled.a`
  &:hover {
    color: var(--light-text-color);
  }
`;

class Footer extends React.Component {
  render() {
    return (
      <Container className='p-3 mt-3'>
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

export default Footer;
