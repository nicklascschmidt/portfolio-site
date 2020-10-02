import React, { Component } from "react";
import styled from 'styled-components';
import { FaCode, FaHome, FaRegHeart, FaUser } from "react-icons/fa";
import { Table } from 'reactstrap';

import SectionHeader from '../components/SectionHeader.jsx';
import ProfileImage from '../../../components/img/ProfileImage.jsx';

const Container = styled.section`
  background-color: var(--light-text-color);
`;

const InnerContainer = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-column-gap: 2rem;
  align-items: center;
  justify-items: center;

  @media (max-width: 768px) {
    grid-template-rows: repeat(2, min-content);
    grid-row-gap: 1rem;
    grid-template-columns: none;
  }
`;

const StyledTable = styled(Table)`
  td {
    vertical-align: middle;
  }
`;

class AboutMe extends Component {
  render() {
    return (
      <Container id={this.props.id}>
        <SectionHeader title='About' id='about-section'/>
        <InnerContainer>
          <ProfileImage src='https://i.imgur.com/rSkhIRj.jpg' alt='Profile Picture' />
          <StyledTable borderless>
            <tbody>
              <tr>
                <td><FaUser size='1.5em'/></td>
                <td>I’m a versatile Frontend Engineer seeking opportunities in the Bay Area.</td>
              </tr>
              <tr>
                <td><FaCode size='1.5em'/></td>
                <td>As a developer, I'm effective at combining problem-solving and creativity to craft polished apps with seamless UX.
                I'm a quick and avid learner with a passion to build and fix things, and always driven to make an impact.</td>
              </tr>
              <tr>
                <td><FaHome size='1.5em'/></td>
                <td>When I'm not coding, I try to be outdoors as much as possible- playing tennis, exploring the city, biking, hiking, all that good stuff.</td>
              </tr>
              <tr>
                <td><FaRegHeart size='1.5em'/></td>
                <td>At heart, I'm a builder and a problem solver with a passion for learning and growing.</td>
              </tr>
            </tbody>
          </StyledTable>
        </InnerContainer>
      </Container>
    );
  }
}

export default AboutMe;