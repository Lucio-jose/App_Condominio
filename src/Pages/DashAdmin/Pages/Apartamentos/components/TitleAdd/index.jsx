
import React from 'react';
import * as S from './style'
import AddApartamento from "../../../../Components/AddApartamento/index.jsx";

function TitleAdd() {
  return (
      <>
        <S.Container>
            <h3>Todos Apartamentos</h3>
            <AddApartamento/>
        </S.Container>
      </>
  );
}
export default TitleAdd;
