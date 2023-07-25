import React, { useState, useEffect} from "react";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import { Paper } from "@mui/material";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const FormsLogin = () => {
  const [value3, setValue3] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();
 

  async function login() {  
    const data = {
      email: email,
      senha: senha
    }
    console.log(data)

    try {
      await fetch("http://localhost:8080/usuario/login", {
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
        navigate("/pastas");
      })
    } catch (error) {
      console.log("teve erro",error);
    }
  }


  const handleClickLogin = () => {
 
    login();
    
  };

  return (
    <Paper
      elevation={3}
      sx={{
        height: "55vh",
        width: "25vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 3,
      }}
    >
      <h2>Login</h2>
      <div>
        <span className="p-input-icon-left">
          <i className="pi pi-user" />
          <InputText
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Login"
          />
        </span>
      </div>
      <div>
        <span className="p-input-icon-left">
          <i className="pi pi-shield" />
          <InputText
            value={senha}
            type="password"
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Senha"
          />
        </span>
      </div>

      <div style={{ width: "68%" }} className="field-checkbox">
        <Checkbox
          inputId="binary"
          checked={checked}
          onChange={(e) => setChecked(e.checked)}
        />
        <label htmlFor="binary">Manter conectado</label>
      </div>
      <Button
        label="Entrar"
        aria-label="Submit"
        onClick={handleClickLogin}
        style={{ width: "70%" }}
      />
    </Paper>
  );
};
