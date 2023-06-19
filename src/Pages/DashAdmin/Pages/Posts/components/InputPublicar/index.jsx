import React, { useState } from "react";
import * as Style from './style.js';
import Img from '../../../../../../images/icons-dash/paper-plane.svg'
import api from "../../../../../../services/api.js";

function Input(){
    const [title,setTile]=useState()
    const[description,setDescription]=useState()
    const addPost=async(data)=>{
        await api.post('/admin/posts',data).then((res)=>{
        getPost()
        })}


    const resetInput=()=>{
        setDescription('');
        setTile('')
    }

        const handleTitle= (input)=>{
            setTile(input.target.value)
            console.log(title);
        }
        const handleDescription= (input)=>{
            setDescription(input.target.value)
            console.log(description);
        }
        const getPost=async()=>{
            await api.get('/admin/posts').then((res)=>{
              console.table(res.data);
            
            })}
        const handleSubmit=async(e)=>{
            e.preventDefault();
            await addPost({title,description})
            window.location.reload()
            resetInput()
          }
return(
    <>
    <Style.Container>
        <Style.Content>
            <form onSubmit={handleSubmit} action="">
                <input minLength={6}  onChange={handleTitle} type="text" name="" id="" placeholder="Titulo"/>
                <input minLength={12}  onChange={handleDescription} type="text" name="" id="inptdesc" placeholder="Descrição"/>
                <button type="submit">
                    <img src={Img} alt="Publicar" />
                </button>
            </form>
         </Style.Content>
    </Style.Container>
    </>
)}
export default Input;