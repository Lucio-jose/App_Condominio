import React from 'react';

function SelectList({data=[], change, defaultv,...props}) {

console.log("ESTA VINDO ",data)
  return (
       <select  onChange={(e)=>change(e.target.value)} props>
          <option>{defaultv}</option>
        {
          data.map((finalidade,index)=>(
            <>
          
            <option  props key={finalidade?.id} value={finalidade?.id} id={finalidade?.id}> {finalidade?.title} </option>
            </>
          ))
        }
      </select>
  );
  console.log(data);
}

export default SelectList;