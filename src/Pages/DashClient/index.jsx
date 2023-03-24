
import React from 'react';
import * as S from './style/style'
import Menu from './Components/Menu';
import HeadDash from './Components/HeadDash';
import Cards from './Components/Cards';
import Apartamentos from './Components/Apartamentos';

function DashClient() {
  return (
    <S.Container>
     <Menu/>
      <S.BodyDash> 
        <HeadDash/> 
        <Cards/>
        <Apartamentos/> 
      </S.BodyDash>
    </S.Container>
  );
}
export default DashClient;
