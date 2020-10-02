import React, { Component } from 'react';
import styled from 'styled-components';
import CardProject from '../../../components/cards/CardProject';
import { mainProjects } from '../../../data/projectSources.data';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;

  @media (max-width: 768px) {
    grid-template-rows: repeat(1, min-content);
    grid-template-columns: none;
    grid-gap: 1rem;
  }
`;

class ProjectCards extends Component {
  render() {
    return (
      <Container>
        {mainProjects.map((item, i) =>
          <CardProject
            key={`card-project-${i}`}
            title={item.title}
            array={item.imgSrcArray}
            projectDescription={item.projectDescription}
            projectLink={item.projectLink}
            githubLink={item.githubLink}
            techUsed={item.techUsed && item.techUsed.join(', ')}
          />
        )}
      </Container>
    )
  }
}

export default ProjectCards;
