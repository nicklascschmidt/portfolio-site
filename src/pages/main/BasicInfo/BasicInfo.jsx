import React from "react";
import styled from 'styled-components';
import IconLink from '../components/IconLink.jsx';
import linkData from './BasicInfo.data';

const Container = styled.header`
  height: 100vh;
  padding: 10vh;
  text-align: center;
  color: var(--light-text-color);
  text-shadow: 0 2px 3px var(--body-text-color);
`;

const Line = styled.hr`
  height: 2px;
  width: 350px;
  background-color: var(--light-text-color);
  filter: drop-shadow(0 1px 3px var(--body-text-color));
`;

const BasicInfo = () => {
  return (
    <Container>
      <h1>Nicklas Chen Schmidt</h1>
      <h3>Frontend Engineer</h3>
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
            { icon }
          </IconLink>
        );
      })}
    </Container>
  );
};

export default BasicInfo;
