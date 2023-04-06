
import React from 'react';
import { Container, BodyDash } from '../../style/style';
import * as S from './style'
import { posts } from './data';
import Menu from '../../Components/Menu';
import HeadDash from '../../Components/HeadDash';
import Input from './components/InputPublicar';

function Posts() {
  return (
      <>
        <Container>
            <Menu/>
            <BodyDash>
                <HeadDash/>
                <S.Container>
                  <Input/>
                  {posts.map((item, index)=>(
                       <S.ContentPub key={index}>
                       <div key={index}>
                       <h4 key={index} contentEditable="true"> {item.title} </h4>
                       <span key={index} contentEditable="true"> {item.timecrieted} </span>
                       </div>
                       <p key={index} contentEditable="true">
                        {item.desc}
                       </p>
                       <section key={index}>
                          <button key={index} id="descrbtn1"> {item.descbtn1} </button>
                          <button key={index}> {item.descbtn2} </button>
                       </section>
                     </S.ContentPub>
                  ))}
                 
                </S.Container>
                
            </BodyDash>
        </Container>
      </>
  );
}
export default Posts;
