import React,{useState, useEffect} from 'react';
import Tipologiastyle from './styled'

function Tipologias({data=[], change,...props}) {

console.log("ESTA VINDO ",data)
  return (
       <Tipologiastyle  onChange={(e)=>change(e.target.value)} props>
            <option>Selecione Tipologia</option>
        {
          data.map((tipologia,index)=>(
          <>
      
            <option  props key={tipologia?.id} value={tipologia?.id} id={tipologia?.id}> {tipologia?.title} </option>
          </>
          ))
        }
      </Tipologiastyle>
  );
  console.log(data);
}

export default Tipologias;