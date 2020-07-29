import React from 'react';
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
import { resumePdfLink } from '../../pages/resume/resumeSource';

export default [
  {
    hrefLink: 'https://github.com/nicklascschmidt',
    title: 'Github',
    icon: (props) => <FaGithub {...props} />,
  },
  {
    hrefLink: 'https://www.linkedin.com/in/nicklascschmidt/',
    title: 'LinkedIn',
    icon: (props) => <FaLinkedin {...props} />,
  },
  {
    hrefLink: resumePdfLink,
    title: 'Resume on Dropbox',
    icon: (props) => <FaFileAlt {...props} />,
  },
];