import React from "react";
import { LinkContainer } from 'react-router-bootstrap';
import { Container, Button } from 'reactstrap';

import Jumbotron from '../../components/jumbotron/Jumbotron';
import CustomCard from '../../components/cards/Card';
import DemoProject from '../../components/demoProject/DemoProject';
import HeaderComponent from '../../components/header/Header';
import FeaturedProjects from '../../components/featuredProject/FeaturedProjects';
import SectionFooter from '../../components/sectionFooter/SectionFooter';
import ContactForm from '../../components/contact/ContactForm';


// TODO: update pix for projects

class Main extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
        
      };
  }

  render() {
    return (
      <div>
        <Jumbotron isMain title='Nicklas Chen Schmidt' subtitle='Frontend Engineer' />

        <HeaderComponent title='Featured Projects' id='main-projects'/>
        <Container>
          <DemoProject />
          <FeaturedProjects />
          <SectionFooter>
            <LinkContainer to='/projects'>
              <Button>Go to All Projects</Button>
            </LinkContainer>
          </SectionFooter>
        </Container>

        <HeaderComponent title='Contact' id='contact'/>
        <Container>
          <CustomCard header='Send an Email'>
            <ContactForm />
          </CustomCard>
        </Container>
      </div>
    );
  }
}

export default Main;
