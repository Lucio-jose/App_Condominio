import React,{useState, useEffect} from 'react';
import FinalidadeStyle from './styled'

function Finalidades({data=[], change,...props}) {

console.log("ESTA VINDO FINALIDADE ",data) 
  return (
       <FinalidadeStyle  onChange={(e)=>change(e.target.value)} props>
          <option>Selecione Finalidade</option>
        {
          data.map((finalidade,index)=>(
            <>
          
            <option  props key={finalidade?.id} value={finalidade?.id} id={finalidade?.id}> {finalidade?.title} </option>
            </>
          ))
        }
      </FinalidadeStyle>
  );
  console.log(data);
}

export default Finalidades;