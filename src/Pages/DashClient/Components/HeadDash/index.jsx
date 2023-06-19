
import React from 'react';
import { useState, useEffect } from 'react';
import { dataUser } from '../../../../services/auth';
import * as S from './style'
import { Link } from 'react-router-dom';
import Img from '../../../../images/icons-dash/avatar.png'
import Img1 from '../../../../images/icons-dash/whatsapp.svg'

function HeadDash({ dadosUsuario = dataUser()}) {
  const [user, setUsuario] = useState();

  useEffect(() => {
    setUsuario(dadosUsuario?.user);
  }, []);

  return (
    <S.Container>
      <input type="text" name="" id="" placeholder='Pesquisar' />
      <section>
      <img src={Img1} alt="img" />
      <img src={Img1} alt="img" />
      </section>
      <div>
         <p>{user?.name}</p>
         <Link to="/dashaclientprofile"> <img src={Img} alt="" id='avatar'/> </Link>
      </div>
    </S.Container>
  );
}
export default HeadDash;

