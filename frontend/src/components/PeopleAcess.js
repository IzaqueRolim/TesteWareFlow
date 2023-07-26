import { Typography } from "@mui/material";
import React, { useState,useEffect } from "react";
import { Foto } from "./Foto";
import { Pessoa } from "./Pessoa";
import { InputText } from "primereact/inputtext";

export const PeopleAcess = (props) => {
  const [jsonData, setJsonData] = useState(null);
  const [email,setEmail] = useState("");

  async function adicionarUsuario() {
    const data = {
      emailUsuario: email,
      idPasta:localStorage.getItem("id_pasta")
    }
    console.log(data)

    try {
      await fetch("http://localhost:8080/pasta/adicionarUsuario", {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(response => response.json())
      .then(data => {
        // Aqui você tem acesso aos dados do corpo da resposta em formato JSON
        console.log(data);
       // window.location.href = window.location.href
      })
    } catch (error) {
      console.log("teve erro",error);
    }
  }
   
  if (!props) {
      return <div>Carregando...</div>;
  }

  return (
    <div className={props.nomeClasse}>
      <Typography variant="h6">Pessoas com acesso</Typography>
      <div className="lista_pessoas">
        {props.usuarios.map((element,index)=>(
          <Pessoa key={index} nome={element.nomeUsuario} />
        ))}
      </div>
      <div className="adicionarUsuario">
        <InputText
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
        <button onClick={adicionarUsuario}>Adicionar</button>
      </div>
    </div>
  );
};
