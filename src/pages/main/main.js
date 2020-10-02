import React from "react";
import styled from 'styled-components';

import BasicInfo from './BasicInfo/BasicInfo.jsx';
import AboutMe from './AboutMe/AboutMe.jsx';
import Projects from './Projects/Projects.jsx';
import Contact from './Contact/Contact.jsx';
import FixedFooter from '../../components/footer/FixedFooter';

const Container = styled.div`
  height: 100vh;
  background-image: url('palace_of_fine_arts.jpeg');
  background-size: cover;
  background-attachment: fixed;
  background-position: top;
  background-repeat: no-repeat;

  section:nth-last-child(2) {
    margin-bottom: 54px;
  }
`;

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };
  }

  render() {
    return (
      <Container>
        <BasicInfo />
        
        <AboutMe />

        <Projects />

        <Contact />

        <FixedFooter />
      </Container>
    );
  }
}

export default Main;
