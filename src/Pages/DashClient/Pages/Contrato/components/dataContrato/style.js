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

    background-color: rgb(116, 243, 232);
        width: 100%;
        height: 20px;
        color: black;
    justify-content: center;
    align-items: center;
  }

  h2{
    font-weight: 400;
    font-size: 19px;
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
      height: 300px;

      h3{
        color: rgb(116, 243, 232);
        font-size: 15px;
        margin-bottom: 15px;
        border-bottom: 1px solid rgb(116, 243, 232);
        width: 150px;
        font-weight: 400;
      }

      span{
        color: silver;
      }
      
      fieldset{
        display: flex;
        margin-top: 25px;
        width: 100%;
        
        
        section{
          width: 50%;
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
        height: 250px;
        
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
