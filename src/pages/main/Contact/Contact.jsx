import React, { Component } from "react";
import styled from 'styled-components';
import { FaGithub, FaLinkedin } from "react-icons/fa";

import SectionHeader from '../components/SectionHeader.jsx';
import Card from '../../../components/cards/Card';
import ContactForm from '../../../components/contact/ContactForm';
import IconLink from '../components/IconLink.jsx';

import { githubLink, linkedinLink } from '../../../data/sources.data';

const Container = styled.section`
  text-align: center;
  background-color: var(--light-text-color);

  p {
    margin-bottom: .5rem;
  }

  @media (max-width: 768px) {
    padding: 40px 20px 80px;
  }
`;

const IconContainer = styled.div`
  & > * {
    margin: 1rem;
  }
`;

const iconStyle = `
  color: var(--link-color);
`;

const IconGithub = styled(FaGithub)`
  ${iconStyle};
`;

const IconLinkedin = styled(FaLinkedin)`
  ${iconStyle};
`;

const Line = styled.hr`
  height: 2px;
  width: 400px;
  background-color: var(--link-color);
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    width: 180px;
  }
`;

const ContactInfoText = styled.div`
  margin-bottom: 1rem;
`;

class Contact extends Component {
  render() {
    return (
      <Container id={this.props.id}>
        <SectionHeader title='Contact' id='contact-section'/>
        <p>Connect with me on GitHub & LinkedIn</p>
        <IconContainer>
          <IconLink hrefLink={githubLink} title='GitHub'>
            <IconGithub size='2em' />
          </IconLink>
          <IconLink hrefLink={linkedinLink} title='GitHub'>
            <IconLinkedin size='2em' />
          </IconLink>
          <Line />
        </IconContainer>
        <ContactInfoText>
          <p>Shoot me an email at <a href="mailto:nicklas.c.schmidt@gmail.com">nicklas.c.schmidt@gmail.com</a></p>
          <p>Call me at (201) 874-0125</p>
          <p>or use the form below:</p>
        </ContactInfoText>
        <Card header='Send an Email'>
          <ContactForm />
        </Card>
      </Container>
    );
  }
}

export default Contact;
