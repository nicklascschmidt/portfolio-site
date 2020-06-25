import React, { Component } from 'react';
import styled from 'styled-components';
import { Row, Col, Card, CardHeader, CardBody, CardText, CardLink } from 'reactstrap';
import projectArray from '../../pages/projects/projectArray';

const Image = styled.img`
  width: 100%;
  background-color: var(--jumbotron-color);
  box-shadow: 0px 1px 5px 1px var(--jumbotron-color);
  border-radius: 3px;
`;

const CardTextSmall = styled(CardText)`
  font-size: .9rem;
`;

class DemoProject extends Component {
  constructor(props) {
    super(props);

    this.project = projectArray[0];
  }
  
  render() {
    const {
      title,
      videoSrcDesktop,
      videoSrcMobile,
      projectDescription,
      projectLink,
      githubLink,
      techUsed,
    } = this.project;

    return (
      <Card className='mb-2'>
        <CardHeader className='card-header-style'>
          <h5>
            <a href={projectLink} className='project-link' target='_blank' rel="noopener noreferrer">{title}</a>
          </h5>
        </CardHeader>
        <CardBody>
          <Row>
            <Col lg='4' className='mb-2'>
              <CardText>{ projectDescription }</CardText>
              <CardTextSmall>
                <strong>Technologies: </strong>
                { `${techUsed.join(', ')}.` }
              </CardTextSmall>
              <CardLink href={projectLink} target='_blank' rel="noopener noreferrer">Live Site</CardLink>
              <CardLink href={githubLink} target='_blank' rel="noopener noreferrer">GitHub</CardLink>
            </Col>
            <Col md='9' lg='6' className='mb-2'>
              <Image src={videoSrcDesktop} alt='demo desktop video' />
            </Col>
            <Col xs='8' sm='8' md='3' lg='2' className='mb-2 mx-auto'>
              <Image src={videoSrcMobile} alt='demo mobile video' />
            </Col>
          </Row>
        </CardBody>
      </Card>
    )
  }
}

export default DemoProject;
