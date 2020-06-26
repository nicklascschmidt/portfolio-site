import React, { Component } from "react";
import styled from 'styled-components';
import { FaCode, FaHome, FaRegHeart, FaUser } from "react-icons/fa";
import { Table } from 'reactstrap';

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const StyledTable = styled(Table)`
  td {
    vertical-align: middle;
  }
`;

class AboutMe extends Component {
  render() {
    return (
      <Container>
        <StyledTable borderless className='mb-0'>
          <tbody>
            <tr>
              <td><FaUser size='1.5em'/></td>
              <td><strong><em>I’m a versatile Frontend Engineer seeking opportunities in the Bay Area.</em></strong></td>
            </tr>
            <tr>
              <td><FaCode size='1.5em'/></td>
              <td>As a developer, I'm effective at combining problem-solving and creativity to craft polished apps with seamless UX.
              I'm a quick and avid learner with a passion to build and fix things, and always driven to make an impact.</td>
            </tr>
            <tr>
              <td><FaHome size='1.5em'/></td>
              <td>When I'm not coding, I play guitar (poorly) and tennis (pretty well), I bike around SF, and walk leisurely outdoors (i.e. hiking).</td>
            </tr>
            <tr>
              <td><FaRegHeart size='1.5em'/></td>
              <td>At heart, I'm a builder and a problem solver with a passion for learning and growing.</td>
            </tr>
          </tbody>
        </StyledTable>
      </Container>
    );
  }
}

export default AboutMe;
