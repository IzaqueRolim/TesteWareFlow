import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Paper } from "@mui/material";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import axios from "../axios";

export const FormsCadastro = (props) => {
  const [nomeUsuario, setNomeUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [formData,setFormData] = useState({
    nomeUsuario: '',
    email: '',
    senha:"",
    pasta:[],
    roles:null
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(event.target);
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      nomeUsuario: nomeUsuario,
      email: email,
      senha: senha,
      pasta:[],
      roles:null
    }
    console.log(data)

    // URL da API para enviar os dados
    const apiUrl = 'http://localhost:8080/usuario';

    // Fazendo a solicitação POST usando Axios
    axios.post(apiUrl,data,{
      withCredentials: true, // Habilita envio de cookies (se necessário)
      headers: {
        'Access-Control-Allow-Origin': '*', // Ou especifique a origem do domínio do seu aplicativo React
        'Access-Control-Allow-Methods': 'POST', // Especifique os métodos permitidos
        'Access-Control-Allow-Headers': 'Content-Type, Authorization', // Especifique os headers permitidos
      },
    })
      .then(response => {
        console.log('Resposta do servidor:', response.data);
     
      })
      .catch(error => {
        console.error('Erro na solicitação:', error);
        // Trate o erro, se necessário
      });
  };
  const navigate = useNavigate();



  const setarValoresUseState = () => {
    setNomeUsuario("");
    setEmail("");
    setSenha("");
  };
  return (
    <Paper
      elevation={3}
      sx={{
        height: "55vh",
        width: "25vw",
        display: "flex",
        flexDirection: "column",
        gap: 3,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h2>Cadastro</h2>
      <div>
        <span className="p-input-icon-left">
          <i className="pi pi-user" />
          <InputText
            name="nomeUsuario"
            onChange={(event)=>setNomeUsuario(event.target.value)}
            placeholder="Login"
          />
        </span>
      </div>
      <div>
        <span className="p-input-icon-left">
          <i className="pi pi-shield" />
          <InputText
            onChange={(e)=>setEmail(e.target.value)}
            placeholder="Email"
          />
        </span>
      </div>
      <div>
        <span className="p-input-icon-left">
          <i className="pi pi-shield" />
          <InputText
            onChange={(e)=>setSenha(e.target.value)}
            type="password"
            placeholder="Senha"
          />
        </span>
      </div>

      <Button
        label="Cadastrar"
        aria-label="Submit"
        onClick={(e)=>handleSubmit(e)}
        style={{ width: "70%" }}
      />
    </Paper>
  );
};
