import React, { useEffect, useState } from "react";
import Search from "./style";
import Img from "../../../../../../images/image.png"
import api from "../../../../../../services/api";
import { dataUser } from "../../../../../../services/auth";

function DescReserva() {
  const [bar, setBar] = useState("none");

  const [apartamentos,setApartamentos]= useState()
  const [tipoPagamento,setTipoPagamento]= useState()
  const [tipoPagamentoId,setTipoPagamentoId]= useState()
  const [comprovativo,setComprovativo]= useState()
  const [comprovativoId,setComprovativoId]= useState()
  const [duracao,setDuracao]= useState(3)
  const [dataEntrada,setDataEntrada]= useState()

  const handleDuracao= (e)=>{
    console.log('FIRST', e);
    setDuracao(e)
  
    console.log('FETIO COM SUCESSO',tipoPagamentoId);
  }
  const handleDataEntraa= (e)=>{
    console.log('FIRST', new Date(e));

    setDataEntrada(new Date(e))
  
    console.log('FETIO COM SUCESSO',tipoPagamentoId);
  }

  const deleteReserva= async()=>{
    const appointment_id= await JSON.parse(localStorage.getItem('reservaId'))
    await api.get(`/appointments/${appointment_id}`)
  }

  const getCategorias=async()=>{
    const apartament_id= await JSON.parse(localStorage.getItem('apartmantoId'))
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
  
    });
}
useEffect(()=>{
  getCategorias()
},[])
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
        <h2> Dados da Reserva </h2>
        <form action="" method="">
          <fieldset>
            <section>
            <h3>Nome do Cliente*</h3>
            <span contentEditable="true">{dataUser()?.user?.name}</span>
            </section>

            <section>
            <h3>N. BI*</h3>
            <span contentEditable="true">{dataUser()?.user?.bi_number}</span>
            </section>

            <section>
            <h3>Number*</h3>
            <span contentEditable="true">XXX XXX XXX</span>
            </section>

            <section>
            <h3>Email</h3>
            <span contentEditable="true">{dataUser()?.user?.email}</span>
            </section>
            </fieldset>

            <fieldset>
            <section>
            <h3>Tipo de Contrato*</h3>
            <span contentEditable="true">{apartamentos?.category?.title.toUpperCase()}</span>
            </section>

            <section>
            <h3>Apartamento</h3>
            <span contentEditable="true"><span>{apartamentos?.typping?.title.toUpperCase()}</span></span>
            </section>

            <section>
            <h3>Duração</h3>
            <span contentEditable="true">... meses</span>
            </section>

            <section>
            <h3>Pagamento</h3>
            <span>Link para o arquivo PDF</span>
            </section>
            </fieldset>

            <fieldset>
            <section className="sectionDescription">
            <h3>Descrição</h3>
            <span contentEditable="true"><span>{apartamentos?.decription?.title.toUpperCase()}</span></span>
            </section>
            </fieldset>

            <fieldset>
            <section className="sectionFile">
              <h3>Imagens do Apartamento*</h3>
              <div>
               <img style={{width:'320px', height:'auto'}} src={apartamentos?.image[0]?.url} alt="" />
               <img style={{width:'320px', height:'auto'}} src={apartamentos?.image[0]?.url} alt="" />
              </div>
            </section>
            </fieldset>
            <div className="Btnss">
            <button onClick={()=>alert('Lamentamos! esta funcionalidade se encontra inactiva! aguarde as próximas actualizações')}>Editar</button> 
            {/* <button onClick={()=>deleteReserva()} id="btndelec">Eliminar</button>   */}
            </div>    
        </form>
      </div>
    </Search>
  );
}

export default DescReserva;
