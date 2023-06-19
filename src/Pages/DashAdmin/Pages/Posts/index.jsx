
import React, { useEffect, useState } from 'react';
import { Container, BodyDash } from '../../style/style';
import * as S from './style'
import { posts } from './data';
import Menu from '../../Components/Menu';
import HeadDash from '../../Components/HeadDash';
import Input from './components/InputPublicar';
import api from '../../../../services/api';

function Posts() {
  const [post,setPost]=useState()
  const [title,setTitle]=useState()
  const [edit,setEdit]=useState(false)
  const [description,setDescription]=useState()

  const getPost=async()=>{
    await api.get('/posts').then((res)=>{
        console.table(res.data);
        setPost(res.data)
      })
  }
  const removePost=async(id)=>{

    window.confirm("Tens a certeza que Desejas eliminar esta publicação?") &&await api.delete(`/admin/posts/${id}`).then((res)=>{
     alert("apagado");
      getPost()
  }).catch(({response})=>{
    alert(response?.message)
  })
   return
      }

   const editPost=async(id)=>{
    setEdit(!edit)
      if(!edit)
        await api.post(`/admin/posts/${id}`,{title,description}).then((res)=>{
        getPost()
        })
    return
    }

 

  useEffect(()=>{
    getPost()
  },[])

  return (
      <>
        <Container>
            <Menu/>
            <BodyDash>
                <HeadDash/>
                <S.Container>
                  <Input/>
                  {
                    post?.length==0?<h3>NÃO HÁ POST</h3>:post?.map((item, index)=>(
                      <S.ContentPub key={index}>
                      <div key={index}>
                      <h4 key={index} contentEditable={edit==true?"true":"false"}> {item?.title} </h4>
                      <span key={index} contentEditable={edit==true?true:false}> {new Date(item?.updatedAt).toLocaleDateString('pt-PT',{year:'numeric',month:'long',minute:'2-digit',hour:'2-digit',day:'2-digit',second:'2-digit',weekday:'long'})} </span>
                      </div>
                      <p key={index} contentEditable="true">
                       {item?.description}
                      </p>
                      <section key={index}>
                         <button onClick={()=>editPost(item?.id)} key={index} id="descrbtn1">{edit?'Salvar':'Editar'}</button>
                         <button onClick={()=>removePost(item?.id)} key={index}> Eliminar</button>
                      </section>
                    </S.ContentPub>
                 ))
                  }
                 
                </S.Container>
                
            </BodyDash>
        </Container>
      </>
  );
}
export default Posts;
