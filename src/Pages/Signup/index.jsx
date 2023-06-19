import React,{useState} from "react";
import api from "../../services/api";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { Form, Input } from "@rocketseat/unform";
import { schema } from "../../Validations/CreateAccount";
import { login, UserLogado } from "../../services/auth";

import * as S from './style.js';

function Cadastro(props) {

    const [error, setError] = useState("");

  async function handleSubmit(data) {
    PostData(data);
  }

  const notify = () => {
    toast.error("Email ou Password Inválido.!");
  };

  async function PostData(data) {
    const response = await api
      .post("/users", data)
      .then(alert("Cadastro feito com sucesso", data?.name))
      .catch(({ response }) => {
        console.warn(response);
        setError(response.data.error);
        notify();
      });
  }

    return (
      <>
        <S.MainForm>
            <Form onSubmit={handleSubmit} schema={schema}>
                <h2>The Golden</h2>
                <Input type="text" name="name" placeholder="Nome completo" />
                <Input type="email" name="email" placeholder="Email" />
                <Input type="password" name="password" placeholder="Password" />
  
                <button type="submit">Cadastrar-se</button>
  
                  <Link to="/login"> Já tens conta?</Link>
  
                <article></article>

            </Form>
        </S.MainForm>
      </>
    );
  }
  
  export default Cadastro;