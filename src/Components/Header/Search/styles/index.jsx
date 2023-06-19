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

    color: #4dff;
    background: #ffffff;
    padding: 8px 15px;

    .fa-times-circle {
      position: absolute;
      top: 0;
      left: 0;
      font-size: 26px;
    }
  }

  > div {
    width: 500px;
    height: 100%;
    background: #ffffff;
    position: fixed;
    top: 0;
    right: 0;
    padding: 20px;
    overflow: auto;
    z-index: 99999;
    transition: all 0.4s;
    display: ${(props) => props.bar};
    flex-direction: column;

    h1 {
      color: #191919;
      margin: 20px auto;
    }

    div {
      display: flex;

      input {
        background: rgba(0, 0, 0, 0.3);
        padding: 4px 10px 4px;
        height: 36px;
        width: 300px;
        transition: all 0.4s;

        :focus {
          box-shadow: 2px 1px 2px rgb(35, 35, 35, 0.3);
        }

        ::placeholder {
          color: #232323;
        }
      }

      button {
        color: #232323;

        display: flex;
        align-items: center;
        justify-content: center;
        color: #ffffff;
        background: #2ca8c4;

        i {
          margin-left: 5px;
          color: #ffffff;
        }
      }
    }

    ul {
      margin-top: 100px;

      li {
        color: #232323;
        line-height: 26px;
      }
    }
  }
`;

export default Search;
