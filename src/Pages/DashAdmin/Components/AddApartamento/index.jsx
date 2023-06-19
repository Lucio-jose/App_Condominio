import React, { useState } from "react";
import { useEffect } from 'react';
import Search from "./styles";
import { toast } from "react-toastify";
import { Form, Input } from "@rocketseat/unform";
import api from "../../../../services/api";
import Categories from  "./components/categories"
import Tipologias from "./components/tipologias";
import Finalidades from "./components/Finalidades";
import Tamanhos from "./components/Tamanhos";
import { log } from "util";


function AddApartamento() {
 
  const [bar, setBar] = useState("none");
  
  const [error, setError] = useState("");

  const [categorias, setCategories] = useState([{}])
  const [tipologias, setTipologias] = useState([{}])
  const [finalidades, setFinalidades] = useState([{}])
  const [preco, setPreco] = useState(0.000)
  const [finalidade_id, setFinalidadeId] = useState()
  const [descricao, setDescricao] = useState()
  const [tipologia_id, setTipologiaId] = useState()
  const [ficheiro_id, setFicheiroId] = useState()
  const [ficheiro, setFicheiro] = useState()
  const [categoria_id, setCategoriId] = useState()
  const [tamanho_id, setTamanhoId] = useState()
  const [tamanhos, setTamanhos] = useState()


  const getCategories = async e => {
  
    const data = await api
    .get("/apartaments/categories")
    .then(res => res.data)
    .catch(e => e)

    setCategories(data)

}

const getTipologias = async e => {
  
  const data = await api
  .get("/typpings")
  .then(res =>{
    console.log(res.data);
    setTipologias(res.data)
  })
  .catch(({error})=>{alert(error?.data?.error)})

}

const getTamanhos = async e => {
  
  const data = await api
  .get("/apartaments/sizes")
  .then(res =>{
    console.log(res.data);
    setTamanhos(res.data)
  })
  .catch(({error})=>{alert(error?.data?.error)})

}

const getFinalidades = async e => {
  
  const data = await api
  .get("/finalitys")
  .then(res =>{
    console.log("FUNALIDADES",res.data);
    setFinalidades(res.data)
  })
  .catch(({error})=>{alert(error?.data?.error)})

}

useEffect(() => {
  getCategories()
  getTipologias()
  getFinalidades()
  getTamanhos()

}, []);

const handleCategoriaId= (e)=>{
  console.log('FIRST', e);
  setCategoriId(e)

  console.log('FETIO COM SUCESSO',categoria_id);
}
const handleTipologiaId= (e)=>{
  console.log('FIRST', e);
  setTipologiaId(e)

  console.log('FETIO COM SUCESSO',tipologia_id);
}
const handleFinalidadeId= (e)=>{
  console.log('FIRST', e);
  setFinalidadeId(e)

  console.log('FETIO COM SUCESSO',finalidade_id);
}

const handleTamanho= (e)=>{
  console.log('FIRST', e);
  setTamanhoId(Number(e))

  console.log('FETIO COM SUCESSO',finalidade_id);
}


const handleDescricao= (e)=>{
  let descr= e.target.value
  setDescricao(descr)
  console.log(descricao);

  console.log('FETIO COM SUCESSO',finalidade_id);
}

const handleFicheiro = async e => {
  const data = new FormData();
  data.append('file', e.target.files[0]);
  setFicheiro(data);
  console.log(data);
  const response = await api
    .post(`/files/${2}`, data)
    .then(res => {
      console.log(data);
      console.log('ID IMAGEM>', res.data);
      setFicheiroId(res.data?.id);
      console.log('ID IMAGEM>', ficheiro_id);
    })
    .catch(({ response }) => {
      console.warn(data);
      alert(response.data.error)
      toast.error(response.data.error);
    });
};



 async function handleSubmit() {
  const data={
  typping_id:tipologia_id,
  finality_id:finalidade_id,
  price:preco,
  size_id:Number(tamanho_id),
  description:descricao,
  category_id:categoria_id,
  file_ids:ficheiro_id
  }
   createDate(data);
 }

 async function createDate(data) {
   const response = await api
     .post("/apartaments", data)
     .then((res)=>{
    
      console.log(res.data?.mensagem);
      console.log('Apartamento',res.data);
     window.location.href='/apartamentos'
     })
     .catch(({ response }) => {
       console.error(response.data);
       alert(response.data.mensagem||response.data||response.data.error)
       setError(response.data[0].error);
     });

 }


  return (
    <Search bar={bar}>
      <button
        onClick={() => {
          bar === "flex" ? setBar("none") : setBar("flex");
        }}
      >
        AD APARTAMENTO
      </button>

      <div>
        <button
          onClick={() => {
            bar === "flex" ? setBar("none") : setBar("flex");
          }}
        >
          FECHAR
        </button>
        <h2> Dados do apartamento </h2>
        <Form onSubmit={handleSubmit}>
          <fieldset>
            <section>
            <h3>Tipologias*</h3>
            <Tipologias  data={tipologias}  change={ handleTipologiaId} />
            </section>
            <section>
            <h3>Tamanho*</h3>
            <Tamanhos  data={tamanhos}  change={ handleTamanho} />
            </section>
            

            <section>
            <h3>Categoria*</h3>
           
         <Categories  data={categorias} value={categoria_id}   change={ handleCategoriaId} />
        
            </section>

            </fieldset>

            <fieldset>
              
            <section>
            <h3>Para*</h3>
            <Finalidades  data={finalidades} value={finalidade_id} change={handleFinalidadeId} name="category"/>
            </section>

            <section>
            <h3>Preço*</h3>
            <Input type="number" onChange={(e)=> setPreco(e.target.value)} value={preco} min={999} required  name="price" id="" />
            </section>
            </fieldset>

            <fieldset>
            <section className="sectionDescription">
            <h3>Descrição</h3>
            <Input type="text" value={descricao}  onChange={(e)=>handleDescricao(e)} name="description" id="" />
            </section>
            </fieldset>

            <section className="sectionFile">
              <h3>Adicionar imagens*</h3>
            <input type="file" onChange={handleFicheiro}  name="file"/>
            </section>
            <button type="submit">Adicionar</button>      
        </Form>
      </div>
    </Search>
  );
}

export default AddApartamento;
