import styled from "styled-components";
import contactbg from "../../../../../../images/contact-bg.jpg";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: url(${contactbg}) no-repeat center;
  background-attachment: fixed;
  background-size: cover;
  max-height: 442px;
  height: 430px;
  width: 100%;
  margin-top: 50px;

  @media (max-width: 768px)
  {
    width: 100%;
    height: auto;
    max-height: 100%;
  }

  div {
    background: rgba(255, 255, 255, 0.6);
    max-width: 660px;
    height: 98%;
    width: 100%;
    padding: 75px 70px;
    margin-left: 20px;

    @media (max-width: 768px)
    {
      width: 100%;
      hreight: 100%;
      max-width: 100%;
      margin-left: 0;
    }

    h3 {
      margin-bottom: 3rem;
      color: #0099ff;
      font-weight: 500;
      line-height: 1.2;
      font-size: 20px;
    }

    p {
      margin-bottom: 3rem;
      color: #666;
      line-height: 1.9;
      font-size: 18px;
      font-weight: 400;
    }

    a {
      background-color: #0099ff;
      border-color: #0099ff;
      padding: 15px 50px;
      border-radius: 0;
      font-size: 1.2rem;
      color: #fff;
    }
  }
`;
