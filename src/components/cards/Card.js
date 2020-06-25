import React from "react";
import styled from 'styled-components';
import './card.css';

import {
  Card,
  CardHeader,
  CardBody,
} from 'reactstrap';

const StyledCardHeader = styled(CardHeader)`
  text-align: ${props => props.headerAlign};
`;
const StyledCardBody = styled(CardBody)`
  text-align: ${props => props.align};
`;

const CustomCard = ({ classNameProp, headerAlign, header, align, children }) => {
  return (
    <Card className={classNameProp}>
      <StyledCardHeader headerAlign={headerAlign} className='card-header-style'>
        <h5>{ header }</h5>
      </StyledCardHeader>
      <StyledCardBody align={align}>
        { children }
      </StyledCardBody>
    </Card>
  )
}

export default CustomCard;
