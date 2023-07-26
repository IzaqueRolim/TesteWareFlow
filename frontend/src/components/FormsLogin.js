import React, { useState, useEffect} from "react";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import { Paper } from "@mui/material";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { underscore } from "i/lib/methods";

export const FormsLogin = () => {
  const [msg,setMsg] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();
  
  const [isVisible, setIsVisible] = useState(true);

  // Efeito que esconde o texto após 3 segundos


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
      .then(response =>  response.json())
      .then(data => {
        console.log(data);
        if(data.id_usuario!=undefined){
          localStorage.setItem('idUsuario',data.id_usuario);
          navigate("/pastas");
        }
       
        setMsg("Email ou Senha incorretos")
        const timer = setTimeout(() => {
          setMsg("")
        }, 2300); 
      })
    } catch (error) {
      setMsg("Usuario ou Senha incorretos")
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
          <i className="pi pi-envelope" />
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
      <span className="respostaLogin">{msg}</span>
      <Button
        label="Entrar"
        aria-label="Submit"
        onClick={handleClickLogin}
        style={{ width: "70%" }}
      />
    </Paper>
  );
};
