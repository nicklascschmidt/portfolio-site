import React from "react";
import JumbotronComponent from '../../components/jumbotron/Jumbotron';
import CardProject from '../../components/cards/CardProject';
import { Container, Row, Col } from 'reactstrap';
import allProjects from '../../data/projectSources.data';

class Projects extends React.Component {
  
  showCards = () => {
    let displayProjects = [];
    for (let i=0; i < allProjects.length; i+=2) {
      displayProjects.push(
        <Row>
          <Col lg='6' className='mb-2'>
            <CardProject
              title={allProjects[i].title}
              array={allProjects[i].imgSrcArray}
              projectDescription={allProjects[i].projectDescription}
              projectLink={allProjects[i].projectLink}
              githubLink={allProjects[i].githubLink}
            />
          </Col>
          {allProjects[i+1] && (
            <Col lg='6' className='mb-2'>
              <CardProject
                title={allProjects[i+1].title}
                array={allProjects[i+1].imgSrcArray}
                projectDescription={allProjects[i+1].projectDescription}
                projectLink={allProjects[i+1].projectLink}
                githubLink={allProjects[i+1].githubLink}
              />
            </Col>
          )}
        </Row>
      )
    }
    return displayProjects;
  }

  render() {
    return (
      <div>
        <JumbotronComponent title='Projects' />
        <Container>
          { this.showCards() }
        </Container>
      </div>
    )
  }
}

export default Projects;
