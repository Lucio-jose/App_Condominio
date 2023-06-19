
import React, { useEffect, useState } from 'react';
import { Container, BodyDash } from '../../style/style';
import * as S from './style'
import { posts } from './data';
import Menu from '../../Components/Menu';
import HeadDash from '../../Components/HeadDash';
import api from '../../../../services/api';

function VewPosts() {
  const [post,setPost]=useState()


  const getPost=async()=>{
    await api.get('/posts').then((res)=>{
        console.table(res.data);
        setPost(res.data)
      })
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

                <S.AreaTitle>
                  <S.Content>
                  <h3>Notícias do Condomínio ({post?.length})</h3>
                  </S.Content>
                </S.AreaTitle>

                <S.Container>
                  { post?.length==0?<h3>Ainda nao há anúncios</h3>:post?.map((item, index)=>(
                       <S.ContentPub key={index}>
                       <div key={index}>
                       <h4 key={index}> {item?.title} </h4>
                       <span key={index}> {new Date(item?.updatedAt).toLocaleDateString('pt-PT',{year:'numeric',month:'long',minute:'2-digit',hour:'2-digit',day:'2-digit',second:'2-digit',weekday:'long'})} </span>
                       </div>
                       <p key={index}>
                        {item?.description}
                       </p>
                     </S.ContentPub>
                  ))}
                 
                </S.Container>
                
            </BodyDash>
        </Container>
      </>
  );
}
export default VewPosts;
