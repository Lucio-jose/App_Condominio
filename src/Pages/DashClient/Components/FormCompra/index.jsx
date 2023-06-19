import React, { useEffect, useState } from "react";
import * as S from './style'
import api from "../../../../services/api";
import { toast } from "react-toastify";
import SelectList from "./style/SelectList";

function Form(){
    const [apartamentos,setApartamentos]= useState()
    const [tipoPagamento,setTipoPagamento]= useState()
    const [tipoPagamentoId,setTipoPagamentoId]= useState()
    const [comprovativo,setComprovativo]= useState()
    const [comprovativoId,setComprovativoId]= useState()
    const [duracao,setDuracao]= useState(3)
    const [dataEntrada,setDataEntrada]= useState()

    const handleFicheiro = async e => {
        const data = new FormData();
        data.append('file', e.target.files[0]);
        setComprovativo(data);
        console.log(data);
        const response = await api
          .post(`/files/${4}`, data)
          .then(res => {
            console.log(data);
            console.log('ID IMAGEM>', res.data?.id);
            setComprovativoId(res.data?.id);

          })
          .catch(({ response }) => {
            console.warn(data);
            alert(response.data.error)
            toast.error(response.data.error);
          });
      };
      

      const handleDuracao= (e)=>{
        console.log('FIRST', e);
        setDuracao(e)
      
        console.log('FETIO COM SUCESSO',tipoPagamentoId);
      }


    const handleTipoPagamentoId= (e)=>{
        console.log('FIRST', e);
        setTipoPagamentoId(e)
      
        console.log('FETIO COM SUCESSO',tipoPagamentoId);
      }
      const handleDataEntraa= (e)=>{
        console.log('FIRST', new Date(e));

        setDataEntrada(new Date(e))
      
        console.log('FETIO COM SUCESSO',tipoPagamentoId);
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
    const getTipoPagamento=async()=>{
        const response = await api.
        get(`/paymenttypes`)
        .then((res)=>{
       setTipoPagamento(res.data)
       console.log(res.data);
        })
        .catch(({ response }) => {
          console.error(response.data);
        //   alert(response.data.mensagem||response.data||response.data.error)
      
        });
    }
    async function handleSubmit(e) {
e.preventDefault()
    const data={
        payment_proof_id:comprovativoId,
        come_in_at:dataEntrada,
        payment_type_id:tipoPagamentoId,
        stay_duration: duracao,
        apartament_id:[await JSON.parse(localStorage.getItem('apartmantoId'))]
    }
   createDate(data);
 }

 async function createDate(data) {
   const response = await api
     .post("/appointments", data)
     .then((res)=>{
     
        alert(res.data?.mensagem);
      console.log(res.data?.mensagem);
      console.log('Agendaentos',res.data);
     window.location.href='/reservafeita'
     })
     .catch(({ response }) => {
       console.error(response.data);
       alert(response.data.message||response.data||response.data.error)
       toast(response.data[0].error);
     });
    }


    useEffect(()=>{
        getCategorias()
        getTipoPagamento()
    },[])

      

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
                   <span id="spanp">Categoria: <span>{apartamentos?.category?.title.toUpperCase()}</span></span>
                   <span id="spanp">Tipologia: <span>{apartamentos?.typping?.title.toUpperCase()}</span></span> 
                   <span id="spanp">Nº de quartos: <span>Aluguer</span></span>
                   <span id="spanp">Tamanho: <span></span>{apartamentos?.size?.title.toUpperCase()}</span>
                   <span id="spanp">Está em: <span>{apartamentos?.finality?.title.toUpperCase()}</span></span>
                   <span id="spanp">Preço: <span>{apartamentos?.price},00Kzs</span> /1Meses</span>
                   <span id="spanp">Total apagar: <span>{apartamentos?.price*duracao},00Kzs</span> /{duracao}Meses</span>
                </div>
                </div>

                <p>{apartamentos?.description}</p>
                <div className="ImgsApartamento">
                    {apartamentos?.image?.map(img=>(
                        <img src={img?.url}></img>
                    ))}
                </div>
            </S.Info>
            <S.DivForm>
                <h3>Preencha o formulário</h3>

                <form onSubmit={handleSubmit} action="">
                    <section id="AreaInputs">
                    <div>
                    <input required type="number" min={3} onChange={(e)=>handleDuracao(e.target.value)} name="" id="" placeholder="Tempo de hospedagem"/>
                    <section>
                    <label htmlFor="">Data de hospedagem</label>
                    <input onChange={(e)=>handleDataEntraa(e.target.valueAsDate)} type="date" name="" id="" placeholder=""/>
                    </section>
                    </div>
                    
                    <div>

                   <SelectList  defaultv={'Tipo de pagamento'} data={tipoPagamento} value={tipoPagamentoId} change={handleTipoPagamentoId}/>
                    <section>
                        <label htmlFor="">Comprovativo</label>
                    </section>
                    <input disabled={ tipoPagamentoId==1 && true}  required  type="file" onChange={handleFicheiro} name="file"  />
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