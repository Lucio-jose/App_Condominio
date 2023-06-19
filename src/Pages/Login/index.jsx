import React from "react";
import { useState } from "react";
import api from "../../services/api";
import { toast } from "react-toastify";
import{Link} from 'react-router-dom';
import { Form, Input } from "@rocketseat/unform";
import { schema } from "../../Validations/Login";
import * as auth from '../../services/auth';

import * as S from './style.js';

console.log("ISADMIN", auth.isAdmin())
function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setSenha] = useState('');
  const [loading, setLoading] = useState(false);

  const handleEmail = e => {
    setEmail(e.target.value);
  };
  const handleSenha = e => {
    setSenha(e.target.value);
  };

  async function handleSubmit(e) {
    console.log(e)
    PostData({ email, password });
  }

  const notify = () => {
    toast.error('Email ou Password Inválido.!');
  };

  async function PostData(data) {
    const response = await api
      .post('/signin', data)
      .then(res => {
        if (res.status === 200) {
          auth.login(res.data.token);
          auth.UserLogado(res.data);
          const path= auth.isAdmin()===true?"/admin":"/dashclient"
          window.location.href = path
        }
      })
      .catch(({ response }) => {
        alert(response.data?.error)
        //console.warn(response.error);
        //toast.error(response.data.error);
      });
  }
    return (
      <>
        <S.MainForm>
            <Form  onSubmit={()=>handleSubmit()}>
                <h2>The Golden</h2>

                <Input 
                type="email" 
                name="email" 
                placeholder="Email" 
                onChange={handleEmail}
                value={email}
                />
                <Input 
                type="password" 
                name="password" 
                placeholder="Password"
                onChange={handleSenha}
                value={password}
                />
  
                <button 
                  type="submit"
                >Login</button>
  
                  <Link to="/forgotpassword"> Esqueceu a senha?</Link>
  
                <article></article>
  
                <Link to="/signup">Criar uma conta</Link>
            </Form>
        </S.MainForm>
      </>
    );
  }
  
  export default Login;