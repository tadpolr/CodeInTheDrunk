import React from 'react';
import styled from 'styled-components';

const Button = styled('button')`
  background-color: yellow;
  font-size: 50px;
  color: black;
  font-family: 'Rubik Mono One', sans-serif;
  margin-top: 20px;
  margin-left: -250px;
  border-color: yellow;
  cursor: pointer;
  &:hover {
    background-color: #bfbf00;
  }
  &:active {
    background-color: #8b8b01;
  }
`;

export default Button;
