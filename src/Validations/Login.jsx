import * as Yup from "yup";

export const schema = Yup.object().shape({
  email: Yup.string()
    .email("Insira um email válido.!")
    .required("O email é Obigatório.!"),
  password: Yup.string()
    .min(6, "Palavra passe Muito curta.!")
    .max(15, "Palavra Passe muito Longa.!")
    .required("A Password é Obrigatória.!"),
});
