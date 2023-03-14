import React from 'react';

import { Container } from './styles';

function Banner({title, desc}) {
  return (
    <Container>
      <h1> {title} </h1>
      <span> {desc} </span>
    </Container>
  ) 
}

export default Banner;