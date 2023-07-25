import React, { useState, useEffect} from "react";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import { Paper } from "@mui/material";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const FormsLogin = () => {
  const [value3, setValue3] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();
  const [formData,setFormData] = useState({
    nomeUsuario: '',
    email: '',
    senha:"",
    pasta:[],
    roles:null
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // URL da API para enviar os dados
    const apiUrl = 'http://localhost:8080/usuario';

    // Fazendo a solicitação POST usando Axios
    axios.post(apiUrl, formData)
      .then(response => {
        console.log('Resposta do servidor:', response.data);
     
      })
      .catch(error => {
        console.error('Erro na solicitação:', error);
        // Trate o erro, se necessário
      });
  };


  const handleClickLogin = () => {
    console.log("Funcao handleClickLogin (acessar a rota de login)");
    console.log("Username: " + userName);
    console.log("Password: " + password);
    console.log("Remember Me: " + checked);

    setUserName("");
    setPassword("");
    setChecked("");
    navigate("/pastas");
  };

  return (
    <Paper
      elevation={3}
      sx={{
        height: "50vh",
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
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
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
