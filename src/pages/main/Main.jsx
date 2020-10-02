import React from "react";
import styled from 'styled-components';

import BasicInfo from './BasicInfo/BasicInfo.jsx';
import About from './About/About.jsx';
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

  section {
    padding: 40px 80px 80px;

    @media (max-width: 768px) {
      padding: 40px 20px 80px;
    }

    &:nth-last-child(2) { 
      margin-bottom: 54px;
    }
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
        
        <About id='about' />

        <Projects id='projects' />

        <Contact id='contact' />

        <FixedFooter />
      </Container>
    );
  }
}

export default Main;
