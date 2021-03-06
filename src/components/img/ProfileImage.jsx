import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid var(--hr-color);
  box-shadow: 0px 1px 3px 0px var(--nav-color);
  width: 13rem;
  height: 13rem;
  overflow: hidden;
  border-radius: 50%;
`;

const Image = styled.img`
  margin: -20px auto;
  width: 100%;
  height: auto;
`;

const ProfileImage = ({ src, alt }) => {
  return (
    <Container>
      <Image src={src} alt={alt} />
    </Container>
  );
}

export default ProfileImage;
