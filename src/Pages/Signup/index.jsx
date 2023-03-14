import React from "react";
import api from "../../services/api";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { Form, Input } from "@rocketseat/unform";
import { schema } from "../../Validations/Login";
import { useState } from "react/cjs/react.development";
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
      .post("/sessions", data)
      .then(console.log("Sucesso ao Enviar => ", data))
      .catch(({ response }) => {
        console.warn(response);
        setError(response.data.error);
        notify();
      });

    if (response) {
      console.log("Sucesso ao Receber Dados => ", response.data);
      const { token, user } = response.data;
      login(token);
      UserLogado(user);

    }
  }

    return (
      <>
        <S.MainForm>
            <Form onSubmit={handleSubmit} schema={schema}>
                <h2>The Golden</h2>
                <Input type="text" name="email" placeholder="Nome completo" />
                <Input type="email" name="email" placeholder="Email" />
                <Input type="password" name="password" placeholder="Password" />
  
                <button type="submit">Cadastrar-se</button>
  
                <span>
                  <Link to="/login"> Já tens conta?</Link>
                </span>
  
                <article></article>

            </Form>
        </S.MainForm>
      </>
    );
  }
  
  export default Cadastro;