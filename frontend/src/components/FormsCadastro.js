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

  const navigate = useNavigate();

  async function postUsuario(e) {
    e.preventDefault();

    const data = {
      nomeUsuario: nomeUsuario,
      email: email,
      senha: senha,
      pasta:[],
      roles:null
    }
    console.log(data)

    try {
      await fetch("http://localhost:8080/usuario", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(response => response.json())
      .then(data => {
        // Aqui você tem acesso aos dados do corpo da resposta em formato JSON
        console.log(data);
        localStorage.setItem('idUsuario',data.id_usuario);
        alert("Cadastrado com sucesso");
        navigate("/pastas");
      })
    } catch (error) {
      console.log("teve erro",error);
    }
  }

  return (
    <Paper
      elevation={3}
      sx={{
        height: "60vh",
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
            placeholder="Seu nome"
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
        onClick={(e)=>postUsuario(e)}
        style={{ width: "70%" }}
      />
    </Paper>
  );
};
