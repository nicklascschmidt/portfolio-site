import React from "react";
import JumbotronComponent from '../../components/jumbotron/Jumbotron';
import { Container, Card, CardBody } from 'reactstrap';
import { FaFileAlt } from "react-icons/fa";
import IconLink from '../../components/icon/icon';
import { resumeDropboxLink, resumeImgurLink } from './resumeSource';
import './resume.css';

class Resume extends React.Component {
  render() {
    return (
      <div>
        <JumbotronComponent title='Resume' />
        <Container>
          <Card className='mb-3'>
            <CardBody className='resume-card'>
              {/* inline style only */}
              <span style={{position:'absolute', right:'1rem', top:'1rem'}}> 
                <IconLink
                  hrefLink={resumeDropboxLink}
                  title='Resume on Dropbox'
                >
                  <FaFileAlt size='3em'/>
                </IconLink>
              </span>
              <img src={resumeImgurLink} alt='Resume' className='resume-img' />
            </CardBody>
          </Card>
        </Container>
      </div>
    );
  }
}

export default Resume;
