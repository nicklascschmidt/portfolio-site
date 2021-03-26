import React from "react";
import styled from 'styled-components';
import { Card, CardText, CardBody, CardLink, CardFooter } from 'reactstrap';
import CarouselComponent from '../carousel/CarouselComponent';
import CustomCardHeader from './CustomCardHeader';

const StyledCard = styled(Card)`
  margin-bottom: 1rem;
  height: 100%;
`;

const StyledCardText = styled(CardText)`
  font-size: .9rem;
`;

const StyledCardFooter = styled(CardFooter)`
  text-align: right;
`;

const Link = styled.a`
  color: var(--body-text-color);
`;

const CardProject = (props) => {
  const {
    techUsed,
    projectLink,
    title,
    array,
    projectDescription,
    githubLink,
  } = props;

  return (
    <StyledCard>
      <CustomCardHeader>
        <h5><Link href={projectLink || githubLink} target='_blank' rel="noopener noreferrer">{ title }</Link></h5>
      </CustomCardHeader>
      <CarouselComponent linkArray={array}/>
      <CardBody>
        <CardText>{ projectDescription }</CardText>
        { techUsed && <StyledCardText><strong>Technologies:</strong> {techUsed}.</StyledCardText> }
      </CardBody>
        <StyledCardFooter>
          {projectLink && <CardLink href={projectLink} target='_blank' rel="noopener noreferrer">Live Site</CardLink>}
          <CardLink href={githubLink} target='_blank' rel="noopener noreferrer">GitHub</CardLink>
        </StyledCardFooter>
    </StyledCard>
  )
}

export default CardProject;
