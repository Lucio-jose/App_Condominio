/* eslint-disable no-undef */
// Parte De Manipulacao do Token E Authorizations

import { Redirect } from 'react-router-dom';

//Este e o Token
export const TOKEN_KEY = 'Tokenn';

//Verificando se o Token existe no navegador
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;

//Pegandop o Token
export const getToken = () => localStorage.getItem(TOKEN_KEY);

//Inserindo o Token no Local STorage
export const login = token => localStorage.setItem(TOKEN_KEY, token);

//Removendo o Token do Local STorage
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  RemoveUser()
};

// Guardando UserLogado no LocalStorage.
export const UserLogado = user =>
  localStorage.setItem('userLogado', JSON.stringify(user));

// Pegando os Dados do UserLogado
export const dataUser = () =>
  JSON.parse(localStorage.getItem('userLogado')) || {};

// Eliminando dados do UserLogado
export const RemoveUser = () => {
  window.location.href = '/login';
  window.location.replace = window.location.hostname + '/login';
  Redirect('/login');
  localStorage.removeItem('userLogado');
};

// Verificando se e o Administrador quem esta logado.
export const isAdmin = () => {
  const UserData = JSON.parse(localStorage.getItem('userLogado'));
  console.log(UserData);
  const is_admin= UserData?.user?.types.filter((type)=> type?.title==='administrador')
  if (is_admin?.length>0
  )
    return true;
console.log("ADMINISTRADOR:",is_admin)
  return false;
};

