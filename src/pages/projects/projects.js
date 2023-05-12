import React from 'react';
import JumbotronComponent from '../../components/jumbotron/Jumbotron';
import CardProject from '../../components/cards/CardProject';
import {Container, Row, Col} from 'reactstrap';
import allProjects from '../../data/projectSources.data';

class Projects extends React.Component {
  showCards = () => {
    let displayProjects = [];
    for (let i = 0; i < allProjects.length; i += 2) {
      displayProjects.push(
        <Row key={`card-project-row-${i}`}>
          <Col lg="6" className="mb-2">
            <CardProject projectItem={allProjects[i]} />
          </Col>
          {allProjects[i + 1] && (
            <Col lg="6" className="mb-2">
              <CardProject projectItem={allProjects[i + 1]} />
            </Col>
          )}
        </Row>
      );
    }
    return displayProjects;
  };

  render() {
    return (
      <div>
        <JumbotronComponent title="Projects" />
        <Container>{this.showCards()}</Container>
      </div>
    );
  }
}

export default Projects;
