import React from "react";
import styled from 'styled-components';
import IconLink from '../icon/icon';
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
import { resumeDropboxLink } from '../../pages/resume/resumeSource';

const StyledJumbotron = styled.div`
  background-color: var(--jumbotron-color);
  box-shadow: 0px 1px 3px 0px var(--jumbotron-color);
  text-align: center;
`;

const Line = styled.hr`
  height: 2px;
  width: 350px;
`;

const Jumbotron = ({ children, title, subtitle }) => {
  return (
    <StyledJumbotron className='p-3 mb-3'>
      { children }

      <h1>{ title }</h1>
      {subtitle && <h3>{this.props.subtitle}</h3>}
      <Line />
      <IconLink
        hrefLink='https://github.com/nicklascschmidt'
        classNameProp='mx-2'
        title='Github'
      >
        <FaGithub size='2em'/>
      </IconLink>
      <IconLink
        hrefLink='https://www.linkedin.com/in/nicklascschmidt/'
        classNameProp='mx-2'
        title='LinkedIn'
      >
        <FaLinkedin size='2em'/>
      </IconLink>
      <IconLink
        hrefLink={resumeDropboxLink}
        classNameProp='mx-2'
        title='Resume on Dropbox'
      >
        <FaFileAlt size='2em'/>
      </IconLink>
    </StyledJumbotron>
  );
};

export default Jumbotron;
