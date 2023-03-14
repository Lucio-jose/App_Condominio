
import React from 'react';
import { Container, BodyDash } from '../../style/style';
import * as S from './style'
import Menu from '../../Components/Menu';
import HeadDash from '../../Components/HeadDash';
import Apartament from './components/Apartamentos';

function Apartamentos() {
  return (
      <>
        <Container>
            <Menu/>
            <BodyDash>
                <HeadDash/>
                <S.Container>
                  <Apartament/>
                </S.Container>
                
            </BodyDash>
        </Container>
      </>
  );
}
export default Apartamentos;
