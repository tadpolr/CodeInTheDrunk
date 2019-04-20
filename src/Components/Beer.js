import React from 'react';
import styled from 'styled-components';

const  Beer = styled('div')`
  display:flex;
  flex-direction:column;
  max-width:100%;
  height:40px;
  bottom:60px;
  margin-left:145px;
  color: white;
  position: absolute;
  text-align: center;
  left: ${props => `${props.progress}%`}
`;

export default Beer;
