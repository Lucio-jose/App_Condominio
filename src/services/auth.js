// Parte De Manipulacao do Token E Authorizations

//Este e o Token
export const TOKEN_KEY = "LAADJVARELA9937625liano";

//Verificando se o Token existe no navegador
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;

//Pegandop o Token
export const getToken = () => localStorage.getItem(TOKEN_KEY);

//Inserindo o Token no Local STorage
export const login = (token) => localStorage.setItem(TOKEN_KEY, token);

//Removendo o Token do Local STorage
export const logout = () => localStorage.removeItem(TOKEN_KEY);

// Guardando UserLogado no LocalStorage.
export const UserLogado = (user) =>
  localStorage.setItem("userLogado", JSON.stringify(user));

// Pegando os Dados do UserLogado
export const GetUser = () =>
  JSON.parse(localStorage.getItem("userLogado")) || {};

// Eliminando dados do UserLogado
export const RemoveUser = () => localStorage.removeItem("userLogado");

// Verificando se e o Administrador quem esta logado.
export const isAdmin = () => {
  const User = JSON.parse(localStorage.getItem("userLogado")) || {
    email: "example.com",
  };

  if (User && User.email === "about@vocation.com") return true;

  return false;
};
