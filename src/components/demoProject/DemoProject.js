import React, { Component } from 'react';
import styled from 'styled-components';
import { Row, Col, Card, CardBody, CardText, CardLink } from 'reactstrap';
import { mainProjects } from '../../data/projectSources.data';
import CustomCardHeader from '../cards/CustomCardHeader';

const Image = styled.img`
  width: 100%;
  background-color: var(--jumbotron-color);
  box-shadow: 0px 1px 5px 1px var(--jumbotron-color);
  border-radius: 3px;
`;

const CardTextSmall = styled(CardText)`
  font-size: .9rem;
`;

const Link = styled.a`
  color: var(--body-text-color);
`;

class DemoProject extends Component {
  render() {
    const {
      title,
      videoSrcDesktop,
      videoSrcMobile,
      projectDescription,
      projectLink,
      githubLink,
      techUsed,
    } = mainProjects[0];

    return (
      <Card className='mb-2'>
        <CustomCardHeader>
          <h5>
            <Link href={projectLink} target='_blank' rel="noopener noreferrer">{ title }</Link>
          </h5>
        </CustomCardHeader>
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
