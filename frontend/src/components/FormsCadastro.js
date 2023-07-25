import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Paper } from "@mui/material";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

export const FormsCadastro = (props) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleClickRegister = () => {
    console.log(
      "Funcao handleClickRegister (acessar a rota de cadastrar user)"
    );
    console.log("Username: " + userName);
    console.log("Email: " + email);
    console.log("Password: " + password);

    setUserName("");
    setEmail("");
    setPassword("");

    window.location.reload();
  };

  const setarValoresUseState=()=>{
    setUserName("")
    setEmail("")
    setPassword("")
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
      <h1>Cadastro</h1>
      <div>
        <span className="p-input-icon-left">
          <i className="pi pi-user" />
          <InputText
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Login"
          />
        </span>
      </div>
      <div>
        <span className="p-input-icon-left">
          <i className="pi pi-shield" />
          <InputText
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </span>
      </div>
      <div>
        <span className="p-input-icon-left">
          <i className="pi pi-shield" />
          <InputText
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Senha"
          />
        </span>
      </div>

      <Button
        label="Cadastrar"
        aria-label="Submit"
        onClick={handleClickRegister}
      />
    </Paper>
  );
};
