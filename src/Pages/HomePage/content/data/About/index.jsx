import React from "react";
import banner1 from "../../../../../images/slider/sliding-4.jpg";
import * as S from "./styles";

function About() {
  return (
    <S.Container>
      <S.SideLetf>
        <h5>ABOUT THE GRANDIUM</h5>
        <h2>Saiba Mais Sobre Nós</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam reiciendis quam veniam ipsa ab labore eligendi cupiditate fuga at accusamus possimus, quod ea hic sapiente, consectetur rem tenetur quae exercitationem.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad delectus repudiandae ab iste tempora eos impedit exercitationem earum nobis perspiciatis, rem beatae. Rem omnis aperiam facere, minus culpa explicabo et!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam optio temporibus illo quod ullam dicta mollitia amet sapiente, obcaecati cum inventore aspernatur ea incidunt error rem aperiam labore praesentium dolore.
        </p>
        <p id="p2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi enim commodi quasi quos eos ducimus, voluptas ullam iure aut quo odit soluta provident obcaecati necessitatibus asperiores debitis, minus quae atque!
        </p>
        <button>LEARN MORE</button>
      </S.SideLetf>
      <S.SideRight>
        <h3>Video Explicando</h3>
      </S.SideRight>
    </S.Container>
  );
}

export default About;
