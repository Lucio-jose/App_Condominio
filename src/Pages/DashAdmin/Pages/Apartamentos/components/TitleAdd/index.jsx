
import React from 'react';
import * as S from './style'
import AddApartamento from "../../../../Components/AddApartamento/index.jsx";

function TitleAdd({data}) {

  return (
      <>
        <S.Container>
            <h3>{data}</h3>
            <AddApartamento/>
        </S.Container>
      </>
  );
}
export default TitleAdd;
