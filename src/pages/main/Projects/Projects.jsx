import React, { Component } from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from 'reactstrap';

import SectionHeader from '../components/SectionHeader.jsx';
import ProjectCards from '../components/ProjectCards.jsx';
import SectionFooter from '../../../components/sectionFooter/SectionFooter';

const Container = styled.section`
  background-image: url('palace_of_fine_arts.webp');
  background-size: cover;
  background-attachment: fixed;
  background-position: top;
  background-repeat: no-repeat;
  background-color: var(--link-color);
  background-blend-mode: lighten;

  & > *:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

class Projects extends Component {
  render() {
    return (
      <Container id={this.props.id}>
        <SectionHeader isWhite title='Projects' id='projects-section'/>
        <ProjectCards />
        <SectionFooter>
          <Link to='/projects'>
            <Button>See More Projects</Button>
          </Link>
        </SectionFooter>
      </Container>
    );
  }
}

export default Projects;
