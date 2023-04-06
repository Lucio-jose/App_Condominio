
import React from 'react';
import * as S from './style'
import { Link } from 'react-router-dom';
import Img from '../../../../images/icons-dash/avatar.png'
import Img1 from '../../../../images/icons-dash/settings.svg'

function HeadDash() {
  return (
    <S.Container>
      <input type="text" name="" id="" placeholder='Pesquisar' />
      <section>
      <img src={Img1} alt="img" />
      </section>
      <div>
         <p>Admin_Condominio</p>
         <Link to="/dashaclientprofile"> <img src={Img} alt="" id='avatar'/> </Link>
      </div>
    </S.Container>
  );
}
export default HeadDash;

