import React from "react";
import styled from 'styled-components';
import CustomCardHeader from './CustomCardHeader';

import { Card, CardBody } from 'reactstrap';

const StyledCardBody = styled(CardBody)`
  text-align: ${props => props.align};
`;

const CustomCard = ({ classNameProp, header, align, children }) => {
  return (
    <Card className={classNameProp}>
      <CustomCardHeader>
        <h5>{ header }</h5>
      </CustomCardHeader>
      <StyledCardBody align={align}>
        { children }
      </StyledCardBody>
    </Card>
  )
}

export default CustomCard;
