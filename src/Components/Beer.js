import React from 'react';
import styled from 'styled-components';

const Beer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  overflow: visible;
  width: 100px;
  height: 100px;
  bottom: 60px;
  color: white;
  position: absolute;
  text-align: center;
  left: ${props => `${props.progress + 15}%`};
  transform: translateX(-50%);
`;

export default Beer;
