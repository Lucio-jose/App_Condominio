
import React from 'react';
import * as S from './style'
import { logout, RemoveUser } from '../../../../services/auth';
import Logo from '../../../../images/icons-dash/byjus.svg'
import { data } from './data';
import { Link } from 'react-router-dom';

function Menu() {
  return (
      <S.Nav> 
        <S.Logo>
          <img src={Logo} alt="Logotipo" />
        <span>GOLDEN</span>
        </S.Logo>
        <S.ListNav className='Nav'>
        {
          data.map((item, index)=>( 
          <Link key={index} 
          to={item.path} 
          id={item.id}><img src={item.img} /> {item.title} </Link>
          ))
        }
        <Link
          onClick={() => {
            logout()
          }}
          to="/login">
          Terminar Sessão
        </Link>
        </S.ListNav>
      </S.Nav>
  );
}
export default Menu;
