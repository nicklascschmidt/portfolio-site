import React from "react";
import styled from 'styled-components';
import JumbotronComponent from '../../components/jumbotron/Jumbotron';
import { Container, Card, CardBody } from 'reactstrap';
import { FaFileAlt } from "react-icons/fa";
import IconLink from '../../components/icon/icon';
import { resumePdfLink, resumeJpgLink } from '../../data/sources.data';

const StyledCardBody = styled(CardBody)`
  position: relative;

  & > img {
    width: 100%;
    height: 100%;
  }
  & > a {
    position: absolute;
    right: 1rem;
    top: 1rem;
  }
`;

class Resume extends React.Component {
  render() {
    return (
      <div>
        <JumbotronComponent title='Resume' />
        <Container>
          <Card className='mb-3'>
            <StyledCardBody>
              <IconLink
                hrefLink={resumePdfLink}
                title='Resume on Dropbox'
              >
                <FaFileAlt size='3em'/>
              </IconLink>
              <img src={resumeJpgLink} alt='Resume' />
            </StyledCardBody>
          </Card>
        </Container>
      </div>
    );
  }
}

export default Resume;
