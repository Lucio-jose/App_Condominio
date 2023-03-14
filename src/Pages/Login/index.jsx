import React from "react";
import api from "../../services/api";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { Form, Input } from "@rocketseat/unform";
import { schema } from "../../Validations/Login";
import { useState } from "react/cjs/react.development";
import { login, UserLogado } from "../../services/auth";

import * as S from './style.js';

function Login(props) {

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

      user.email === "freela@dev.com"
        ? props.history.push("/admin")
        : props.history.push("/");
    }
  }

    return (
      <>
        <S.MainForm>
            <Form onSubmit={handleSubmit} schema={schema}>
                <h2>The Golden</h2>
                <Input type="email" name="email" placeholder="Email" />
                <Input type="password" name="password" placeholder="Password" />
  
                <button type="submit">Login</button>
  
                <span>
                  <Link to="/forgotpassword"> Esqueceu a senha?</Link>
                </span>
  
                <article></article>
  
                <Link to="/signup">Criar uma conta</Link>
            </Form>
        </S.MainForm>
      </>
    );
  }
  
  export default Login;