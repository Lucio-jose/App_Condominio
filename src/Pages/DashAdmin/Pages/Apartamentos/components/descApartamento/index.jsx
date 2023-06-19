import React, { useState } from "react";
import Search from "./style";
import Img from "../../../../../../images/image.png"
import api from "../../../../../../services/api";

function DescApartamento({apartament_id}) {

  const [bar, setBar] = useState("none");
  const [apartamentos,setApartamentos]= useState()
  const [tipoPagamento,setTipoPagamento]= useState()
  const [tipoPagamentoId,setTipoPagamentoId]= useState()
  const [comprovativo,setComprovativo]= useState()
  const [comprovativoId,setComprovativoId]= useState()
  const [duracao,setDuracao]= useState(3)
  const [dataEntrada,setDataEntrada]= useState()

  const deleteApartamento=async()=>{

 const apartamento_id= await JSON.parse(localStorage.getItem('apartamentoId'))
 await api.get(`/appointments/${apartamento_id}`)
  }
  const getApartamentos=async()=>{
    console.log("ID DO APART",apartament_id);
    console.log();
    const response = await api.
    get(`/apartaments/${apartament_id}`)
    .then((res)=>{
   setApartamentos(res.data)
   console.log(res.data);
    })
    .catch(({ response }) => {
      console.error(response.data);
    //   alert(response.data.mensagem||response.data||response.data.error)
  
    });}
  return (
    <Search bar={bar}>
      <button
        onClick={() => {
          bar === "flex" ? setBar("none") : setBar("flex");
        }}
      >
        Ver detalhe
      </button>

      <div>
        <button
          onClick={() => {
            bar === "flex" ? setBar("none") : setBar("flex");
          }}
        >
          CLOSE
        </button>
        <h2> Dados do Apartamento </h2>
        <form action="" method="">
          <fieldset>
            <section>
            <h3>Tipologia</h3>
            <span contentEditable="true">{apartamentos?.typping?.title}</span>
            </section>

            <section>
            <h3>Nº de quartos</h3>
            <span contentEditable="true">06</span>
            </section>

            <section>
            <h3>Categoria</h3>
            <span contentEditable="true">{apartamentos?.category?.title}</span>
            </section>

            </fieldset>

            <fieldset>

            <section>
            <h3>Tamanho</h3>
            <span contentEditable="true">{apartamentos?.size?.title}</span>
            </section>
            <section>
            <h3>Para*</h3>
            <span contentEditable="true">{apartamentos?.finality?.title}</span>
            </section>

            <section>
            <h3>Preço</h3>
            <span contentEditable="true">{apartamentos?.price}/Mes</span>
            </section>


            </fieldset>

            <fieldset>
            <section className="sectionDescription">
            <h3>Descrição</h3>
            <span contentEditable="true">{apartamentos?.description}</span>
            </section>
            </fieldset>

            <fieldset>
            <section className="sectionFile">
              <h3>Imagens do Apartamento*</h3>
              <div>
               <img style={{width:'320px',height:'auto'}} src={apartamentos?.image[0]?.url} alt="" />
               <img style={{width:'320px',height:'auto'}} src={apartamentos?.image[0]?.url} alt="" />
 
              </div>
            </section>
            </fieldset>
            <div className="Btnss">
            <button onClick={()=>alert('Lamentamos! esta funcionalidade se encontra inactiva! aguarde as próximas actualizações')}>Editar</button> 
            {/* <button onClick={()=>deleteApartamento()} id="btndelec">Eliminar</button>   */}
            </div>    
        </form>
      </div>
    </Search>
  );
}

export default DescApartamento;
