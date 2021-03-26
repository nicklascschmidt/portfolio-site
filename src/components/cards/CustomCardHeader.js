import React from "react";
import styled from 'styled-components';
import { CardHeader } from 'reactstrap';

const StyledCardHeader = styled(CardHeader)`
  background-color: var(--card-header-color);
`;

const CustomCardHeader = ({ children }) => {
  return (
    <StyledCardHeader>
      { children }
    </StyledCardHeader>
  );
}

export default CustomCardHeader;
