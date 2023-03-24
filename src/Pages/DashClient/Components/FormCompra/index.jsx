import React from "react";
import * as S from './style'
import Img from "../../../../images/apartamentos/imgeight.jpg"
import Img1 from "../../../../images/apartamentos/imgeight.jpg"
function Form(){
    return(
        <>
        <S.Container>
            <S.Info>
                <div className="AllInfo">
                <div>
                   <h3>Dados do Condomínio</h3>
                   <span id="spanp">Nome: <span>B.Golden</span></span>
                   <span id="spanp">Provincia: <span>Luanda</span></span>
                   <span id="spanp">Municipio: <span>Viana</span></span>
                   <span id="spanp">IBAN: <span>970567LSA43368</span></span>
                   <span id="spanp">Contacto: <span>92X XXX XXX</span></span>
                   <span id="spanp">E-mail: <span>golden@gmail.com</span></span>
                </div>
                <div>
                <h3>Dados do Apartamento</h3>
                   <span id="spanp">Categoria: <span>A. Familiar</span></span>
                   <span id="spanp">Tipologia: <span>T4</span></span> 
                   <span id="spanp">Nº de quartos: <span>Aluguer</span></span>
                   <span id="spanp">Tamanho: <span>12.32mX10m</span></span>
                   <span id="spanp">Está em: <span>Aluguer</span></span>
                   <span id="spanp">Preço: <span>$40.000,00</span> /3Meses</span>
                </div>
                </div>

                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime quasi illo vitae ea quis reprehenderit qui! Repellendus laudantium quae inventore cumque dolorum, doloremque sit debitis ratione ducimus aut eaque assumenda.</p>
                <div className="ImgsApartamento">
                    <img src={Img} alt="" />
                    <img src={Img1} alt="" />
                    <img src={Img} alt="" />
                </div>
            </S.Info>
            <S.DivForm>
                <h3>Preencha o formulário</h3>

                <form action="">
                    <section id="AreaInputs">
                    <div>
                    <input type="text" name="" id="" placeholder="Nº BI"/>
                    <input type="text" name="" id="" placeholder="Tempo de hospedagem"/>
                    <section>
                    <label htmlFor="">Data de hospedagem</label>
                    <input type="date" name="" id="" placeholder=""/>
                    </section>
                    </div>
                    
                    <div>
                    <input type="text" name="" id="" placeholder="Contacto"/>
                    <select name="" id="">
                        <option>Tipo de Pagamento</option>
                        <option value="">Cache</option>
                        <option value="">Transferencia</option>
                    </select>
                    <section>
                        <label htmlFor="">Comprovativo</label>
                    </section>
                    <input type="file" name="" id="" />
                    </div>
                    </section>
                    <section id="AreaBtnEnv">
                        <button>Reservar</button>
                    </section>
                </form>
            </S.DivForm>
        </S.Container> 
        </>
    )
}
export default Form;