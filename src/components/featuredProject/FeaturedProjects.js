import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import CardProject from '../cards/CardProject';
import projectArray from '../../pages/projects/projectArray';

class FeaturedProjects extends Component {
  constructor(props) {
    super(props);

    this.projects = projectArray.slice(1,4);
  }

  render() {
    return (
      <Row className='mb-2'>
        {this.projects.map( (item, i) => 
          <Col lg='4' className='mb-2'>
            <CardProject
              key={`project${i}`}
              title={item.title}
              array={item.imgSrcArray}
              projectDescription={item.projectDescription}
              projectLink={item.projectLink}
              githubLink={item.githubLink}
              techUsed={item.techUsed && item.techUsed.join(', ')}
            />
          </Col>
        )}
      </Row>
    )
  }
}

export default FeaturedProjects;
