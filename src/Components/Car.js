import React from 'react';
import styled from 'styled-components';

const Car = styled('div')`
  margin-left:50px;
  width: 500px;
  color: blue;
  padding: 32px;
  position: absolute;
  left: ${props => `${props.progress}%`}
`;

export default Car;
