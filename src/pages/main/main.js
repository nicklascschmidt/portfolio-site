import React from "react";
import { LinkContainer } from 'react-router-bootstrap';
import { Container, Row, Col, Button } from 'reactstrap';

import JumbotronComponent from '../../components/jumbotron/Jumbotron';
import CustomCard from '../../components/cards/Card';
import ProfileImageComponent from '../../components/img/profile-image';
import DemoProject from '../../components/demoProject/DemoProject';
import HeaderComponent from '../../components/header/Header';
import FeaturedProjects from '../../components/featuredProject/FeaturedProjects';
import SectionFooter from '../../components/sectionFooter/SectionFooter';
import AboutMe from '../../components/aboutMe/AboutMe';
import ContactInfo from '../../components/contact/ContactInfo';
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
        <JumbotronComponent title='Nicklas Chen Schmidt' subtitle='Full-Stack Developer'>
          <ProfileImageComponent src='https://i.imgur.com/rSkhIRj.jpg' alt='Profile Picture' />
        </JumbotronComponent>
        
        <Container>
          <Row>
            <Col lg='8' className='mb-3'>
              <CustomCard header='About'>
                <AboutMe />
              </CustomCard>
            </Col>
            <Col lg='4' className='mb-3'>
              <CustomCard header='Contact Info' classNameProp='card-height-fix'>
                <ContactInfo />
              </CustomCard>
            </Col>
          </Row>
        </Container>

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
