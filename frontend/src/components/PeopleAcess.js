import { Button, Typography } from "@mui/material";
import React, { useState,useEffect } from "react";
import { Foto } from "./Foto";
import { Pessoa } from "./Pessoa";
import { InputText } from "primereact/inputtext";


export const PeopleAcess = (props) => {
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
      .then(response =>{
        console.log(response)
        window.location.href = window.location.href
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
      })
      .then(data => {
        // Aqui você tem acesso aos dados do corpo da resposta em formato JSON
        console.log(data);
        if(data.id_pasta!=undefined){
           
        }
      })
    } catch (error) {
      console.log("teve erro",error);
    }
  }
   
  if (!props) {
      return <div>Carregando...</div>;
  }

  return (
    <div className={props.nomeClasse} onMouseLeave={props.SetIsHoveredOpen} onMouseEnter={props.setIsHoveredClose}>
      <div className="lista_pessoas">
      <Typography variant="h6">Pessoas com acesso</Typography>
        {props.usuarios.map((element,index)=>(
          <Pessoa key={index} nome={element.nomeUsuario} />
        ))}

        <div className="adicionarUsuario">
          <InputText
              style={{width:"65%", marginTop:"0vh", height:"100%"}}
              name="nomeUsuario"
              onChange={(event)=>{setEmail(event.target.value)}}
              placeholder="Email"
              />   
            <button onClick={adicionarUsuario}>Adicionar</button>
        </div>
      </div>
    </div>
  );
};
