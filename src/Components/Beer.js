import React from 'react';
import styled from 'styled-components';

const Beer = styled('div')`
  display:flex;
  flex-direction:column;
  width:auto;
  height:40px;
  bottom:100px;
  padding-left:225px;
  color: white;
  position: absolute;
  
  text-align: center;
  left: ${props => `${props.progress}%`}
`;

export default Beer;
