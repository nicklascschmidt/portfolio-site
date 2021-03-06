import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import CardProject from '../cards/CardProject';
import { mainProjects } from '../../data/projectSources.data';

class FeaturedProjects extends Component {
  render() {
    return (
      <Row className='mb-2'>
        {mainProjects.map( (item, i) => 
          <Col lg='6' className='mb-2' key={`project-${i}`}>
            <CardProject
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
