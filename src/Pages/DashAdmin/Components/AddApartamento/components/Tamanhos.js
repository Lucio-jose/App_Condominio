import React,{useState, useEffect} from 'react';
import CategoryStyle from './styled'

function Tamanhos({data=[], change,...props}) {

console.log("ESTA VINDO ",data)
  return (
       <CategoryStyle  onChange={(e)=>change(e.target.value)} props>
          <option>Selecione tamanho</option>
        {
          data.map((category,index)=>(
          <>

            <option  props key={category?.id} value={category?.id} id={category?.id}> {category?.title} </option>
          </>
          ))
        }
      </CategoryStyle>
  );
  console.log(data);
}

export default Tamanhos;