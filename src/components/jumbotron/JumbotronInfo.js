import React from "react";
import styled from 'styled-components';
import IconLink from '../icon/icon';
import linkData from './JumbotronInfo.data';
import ProfileImage from '../img/ProfileImage';

const Container = styled.div`
  text-align: center;
`;

const Line = styled.hr`
  height: 2px;
  width: 350px;
`;

const JumbotronInfo = ({ isMain, title, subtitle }) => {
  return (
    <Container>
      {isMain && <ProfileImage src='https://i.imgur.com/rSkhIRj.jpg' alt='Profile Picture' />}

      <h1>{ title }</h1>
      {subtitle && <h3>{subtitle}</h3>}
      <Line />
      {linkData.map((item, idx) => {
        const { hrefLink, title, icon } = item;
        return (
          <IconLink
            key={`jumbotron-icon-link-${idx}`}
            classNameProp='mx-2'
            hrefLink={hrefLink}
            title={title}
          >
            { icon({ size: '2em' }) }
          </IconLink>
        );
      })}
    </Container>
  );
};

export default JumbotronInfo;
