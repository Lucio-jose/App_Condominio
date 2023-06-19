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

    border: 1px solid #FF9300;
    background-color: #FF9300;
    color: white;
    height: 40px;
    width: 150px; 
    display: flex;
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
        color: rgb(180, 180, 180);
        font-size: 17px;
        margin-bottom: 7px;
      }
      
      fieldset{
        display: flex;
        margin-top: 25px;
        
        section{
          width: 50%;
        }

        select{
        height: 40px;
        width: 90%;
        color: white;
        font-size: 18px;
        padding-left: 10px;
        background-color: #03030352;
        border: 1px solid rgb(68, 68, 68);
          font-size: 16px;

        option{
          background-color: #16161d;
          color: #FF9300;
          font-size: 16px;
        }
        }

        .sectionDescription{
          width: 95%;
          margin-bottom: 20px;
          input{
            width: 100%;
            height: 100px;
          }
        }
      }

      .sectionFile{
        margin-bottom: 20px;
         input{
          padding-left: 0px;
          border: none;
          font-size: 15px;
         }
        }

      input{
        border: 1px solid rgb(68, 68, 68);
        height: 40px;
        width: 90%;
        color: white;
        font-size: 18px;
        padding-left: 10px;
        background-color: #03030352;
        font-size: 16px;
      }
    }
  }
`;
export default Search;
