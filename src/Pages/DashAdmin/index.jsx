
import React from 'react';
import * as S from './style/style'
import Menu from './Components/Menu';
import HeadDash from './Components/HeadDash';
import Estatistica from './Components/Estatistica';
import SmallNotify from './Components/SmallNotificacao';
import ContentData from './Components/Content_data';

function DashAdmin() {
  return (
    <S.Container>
     <Menu/>
      <S.BodyDash>
        <HeadDash/> 
        <ContentData/>
        <SmallNotify/>
        <Estatistica/> 
      </S.BodyDash>
    </S.Container>
  );
}
export default DashAdmin;
