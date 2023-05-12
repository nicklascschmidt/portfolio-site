import React from 'react';
import styled from 'styled-components';
import {Card, CardText, CardBody, CardLink, CardFooter} from 'reactstrap';
import CarouselComponent from '../carousel/CarouselComponent.jsx';
import CustomCardHeader from './CustomCardHeader';

const StyledCard = styled(Card)`
  margin-bottom: 1rem;
  height: 100%;
`;

const StyledCardText = styled(CardText)`
  font-size: 0.9rem;
`;

const StyledCardFooter = styled(CardFooter)`
  text-align: right;
`;

const Link = styled.a`
  color: var(--body-text-color);
`;

const CardProject = ({projectItem}) => {
  const {title, imgSrcArray, projectDescription, projectLink, githubLink, documentationLink, techUsed} = projectItem;
  return (
    <StyledCard>
      <CustomCardHeader>
        <h5>
          <Link href={projectLink || githubLink} target="_blank" rel="noopener noreferrer">
            {title}
          </Link>
        </h5>
      </CustomCardHeader>
      <CarouselComponent linkArray={imgSrcArray} />
      <CardBody>
        <CardText>{projectDescription}</CardText>
        {techUsed && (
          <StyledCardText>
            <strong>Technologies:</strong> {techUsed.join(', ')}.
          </StyledCardText>
        )}
      </CardBody>
      <StyledCardFooter>
        {documentationLink && (
          <CardLink href={documentationLink} target="_blank" rel="noopener noreferrer">
            Documentation
          </CardLink>
        )}
        {projectLink && (
          <CardLink href={projectLink} target="_blank" rel="noopener noreferrer">
            Live Site
          </CardLink>
        )}
        {githubLink && (
          <CardLink href={githubLink} target="_blank" rel="noopener noreferrer">
            GitHub
          </CardLink>
        )}
      </StyledCardFooter>
    </StyledCard>
  );
};

export default CardProject;
