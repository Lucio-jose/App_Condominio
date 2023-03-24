
import React from 'react';
import * as S from './style'
import Menu from '../../Components/Menu';
import HeadDash from '../../Components/HeadDash';
import Form from '../../Components/FormCompra';

function FormComprar() {
  return (
    <S.Container>
     <Menu/>
      <S.BodyDash> 
        <HeadDash/> 
        <Form/>
      </S.BodyDash>
    </S.Container>
  );
}
export default FormComprar;
