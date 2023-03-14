import styled, { keyframes } from "styled-components";
import slide1 from "../../../images/slider/slid-1.jpg";
import slide2 from "../../../images/slider/slide-2.jpg";
import slide3 from "../../../images/slider/slid.jpg";
import slide4 from "../../../images/slider/contact-bg.jpg";

const slider = keyframes`
0%{
  left: 0;
}
20%{
  left: 0;
}
25%{
  left: -100%;
}
45%{
  left: -100%;
}
50%{
  left: -200%;
}
70%{
  left: -200%;
}
75%{
  left: -300%;
}
95%{
  left: -300%;
}
100%{
  left: -400%;
}

`;

const ContainerSliding = styled.section`
  overflow: hidden;
  height: 375px;

  ul {
    position: relative;
    width: 500%;
    height: 100%;
    left: 0px;
    margin: 0;
    animation: 15s ${slider} infinite;

    > div {
      float: left;
      width: 20%;
      height: 100%;
      padding: 30px;

      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;

      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;

      h1 {
        font-size: 38px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #ffffff;
        /* width: 100%; */

        @media screen and(max-width: 568px) {
          font-size: 28px;
        }
      }

      :nth-child(1) {
        background-image: linear-gradient(#000, rgba(31, 63, 122, 0.521)),
          url(${slide1});
      }

      :nth-child(2) {
        background-image: linear-gradient(#000, rgba(31, 63, 122, 0.521)),
          url(${slide2});
      }

      :nth-child(3) {
        background-image: linear-gradient(#000, rgba(31, 63, 122, 0.521)),
          url(${slide3});
      }

      :nth-child(4) {
        background-image: linear-gradient(#000, rgba(31, 63, 122, 0.521)),
          url(${slide4});
      }

      :nth-child(5) {
        background-image: linear-gradient(#000, rgba(0, 0, 0, 0.7)),
          url(${slide1});
      }
    }
  }
`;

export { ContainerSliding };
