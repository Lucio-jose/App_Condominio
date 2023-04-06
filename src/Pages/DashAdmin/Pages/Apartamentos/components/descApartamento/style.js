import styled from "styled-components";

const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    display: flex !important;
    position: relative !important;
    cursor: pointer;

    top: 0 !important;
    right: 0 !important;

    background-color: #4883ff;
        width: 100%;
        height: 20px;
        color: white;
    justify-content: center;
    align-items: center;
  }

  h2{
    font-weight: 400;
    font-size: 19px;
    text-align: start;
    margin-top: 10px;
  }

  > div{
    width: 700px;
    height: 100%;
    background: #16161d;
    color: white;
    position: fixed;
    top: 0;
    left: 25%;
    padding: 20px;
    overflow: auto;
    z-index: 99999;
    transition: all 0.4s;
    display: ${(props) => props.bar};
    flex-direction: column;

    form{
      height: 500px;

      h3{
        color: #4883ff;
        font-size: 15px;
        margin-bottom: 15px;
        border-bottom: 1px solid #4883ff;
        width: 150px;
        font-weight: 400;
        text-align: start;
      }

      span{
        color: silver;
        text-align: justify;
        font-size: 14px;
      }
      
      fieldset{
        display: flex;
        width: 100%;
        margin-bottom: 10px;
        
        section{
          width: 50%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .sectionDescription{
          width: 95%;

          input{
            width: 100%;
          }
        }
      }

      .sectionFile{
        width: 100%;
        height: 200px;
        
        div{
          display: flex;
          width: 100%;
            height: 150px;
            justify-content: space-between;


          img{
            width: 200px;
            height: 150px;
          }
        }
         
        }

        .Btnss{
          display: flex;
          height: 40px;
          width: 200px;
          justify-content: space-between;

          button{
            width: 90px;
          }
          #btndelec{
            background-color: brown;
          }
        }
     
    }
  }
`;
export default Search;
