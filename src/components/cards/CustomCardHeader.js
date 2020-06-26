import React from "react";
import styled from 'styled-components';
import { CardHeader } from 'reactstrap';

const StyledCardHeader = styled(CardHeader)`
  text-align: ${props => props.headerAlign};
  background-color: var(--card-header-color);
`;

const CustomCardHeader = ({ headerAlign, children }) => {
  return (
    <StyledCardHeader headerAlign={headerAlign}>
      { children }
    </StyledCardHeader>
  );
}

export default CustomCardHeader;
