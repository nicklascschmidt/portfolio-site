import React from 'react';
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
import { githubLink, linkedinLink, resumePdfLink } from '../../data/sources.data';

export default [
  {
    hrefLink: githubLink,
    title: 'Github',
    icon: (props) => <FaGithub {...props} />,
  },
  {
    hrefLink: linkedinLink,
    title: 'LinkedIn',
    icon: (props) => <FaLinkedin {...props} />,
  },
  {
    hrefLink: resumePdfLink,
    title: 'Resume on Dropbox',
    icon: (props) => <FaFileAlt {...props} />,
  },
];
