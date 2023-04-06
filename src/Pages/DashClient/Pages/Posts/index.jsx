
import React from 'react';
import { Container, BodyDash } from '../../style/style';
import * as S from './style'
import { posts } from './data';
import Menu from '../../Components/Menu';
import HeadDash from '../../Components/HeadDash';

function VewPosts() {
  return (
      <>
        <Container>
            <Menu/>
            <BodyDash>
                <HeadDash/>

                <S.AreaTitle>
                  <S.Content>
                  <h3>Notícias do Condomínio</h3>
                  </S.Content>
                </S.AreaTitle>

                <S.Container>
                  {posts.map((item, index)=>(
                       <S.ContentPub key={index}>
                       <div key={index}>
                       <h4 key={index}> {item.title} </h4>
                       <span key={index}> {item.timecrieted} </span>
                       </div>
                       <p key={index}>
                        {item.desc}
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
