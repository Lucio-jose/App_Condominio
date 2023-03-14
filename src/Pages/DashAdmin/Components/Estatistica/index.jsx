
import React from 'react';
import * as S from './style'

function Estatistica() {
  return (
      <>
        <S.Container>
            <S.Content>
                <h3>Estatística Diária</h3>
                <span>Lorem Ipsom DolorAmet</span>
            </S.Content>
            <S.Content>
                <h3>Relatórios de Estatística</h3>
                <span>Lorem Ipsom DolorAmet</span>

                <S.Subcontent>
                    <div>
                        <section>
                            <h4>Estatística de Lorem</h4>
                            <h5> + </h5>
                            <h4>Total</h4>
                        </section>
                        <section className='Estatistica0'>
                            <h4>Estatística de Lorem</h4>
                            <h5> + </h5>
                            <h4>Total</h4>
                        </section>
                    </div>
                    <div>
                        <section className='Estatistica1'>
                            <h4>Estatística de Lorem</h4>
                            <h5> + </h5>
                            <h4>Total</h4>
                        </section>
                        <section className='Estatistica2'>
                            <h4>Estatística de Lorem</h4>
                        </section>
                    </div>
                </S.Subcontent>
            </S.Content>
        </S.Container>
      </>
  );
}
export default Estatistica;
