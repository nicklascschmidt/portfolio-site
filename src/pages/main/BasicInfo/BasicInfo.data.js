import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
import { githubLink, linkedinLink, resumePdfLink } from '../../../data/sources.data';

const iconStyle = `
  color: var(--light-text-color);
  filter: drop-shadow(0 1px 3px var(--body-text-color));
  &:hover {
    color: var(--light-text-color);
  }
`;

const IconGithub = styled(FaGithub)`
  ${iconStyle};
`;

const IconLinkedin = styled(FaLinkedin)`
  ${iconStyle};
`;

const IconFileAlt = styled(FaFileAlt)`
  ${iconStyle};
`;


export default [
  {
    hrefLink: githubLink,
    title: 'Github',
    icon: <IconGithub size='2em' />,
  },
  {
    hrefLink: linkedinLink,
    title: 'LinkedIn',
    icon: <IconLinkedin size='2em' />,
  },
  {
    hrefLink: resumePdfLink,
    title: 'Resume on Dropbox',
    icon: <IconFileAlt size='2em' />,
  },
];
