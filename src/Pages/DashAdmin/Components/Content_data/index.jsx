
import React from 'react';
import * as S from './style'

function ContentData() {
  return (
    <S.Container>
            <S.Content>
              <S.SubContent>
              <S.Card>
                <section>
                  <span>Resume</span>
                  <button>Today</button>
                </section>
              <h3>Estatística Diária</h3>
              </S.Card>
              <S.Card>
                <section>
                  <span>Resume</span>
                  <button id="secondbtn">Today</button>
                </section>
              <h3>Estatística De Apartamentos</h3>
              </S.Card>
              </S.SubContent>

              <S.SubContent>
              <S.Card>
              <section>
                  <span>Resume</span>
                  <button id="thirdbtn">Today</button>
                </section>
              <h3>Estatística De Reservas</h3>
              </S.Card>
              <S.Card>
              <section>
                  <span>Resume</span>
                  <button id="fourthbtn">Today</button>
                </section>
              <h3>Estatística De Contratos</h3>
              </S.Card>
              </S.SubContent>
            </S.Content>
        </S.Container>
  );
}
export default ContentData;

