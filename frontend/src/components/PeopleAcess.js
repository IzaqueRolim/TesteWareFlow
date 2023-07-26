import { Typography } from "@mui/material";
import React, { useState,useEffect } from "react";
import { Foto } from "./Foto";
import { Pessoa } from "./Pessoa";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { alignProperty } from "@mui/material/styles/cssUtils";

export const PeopleAcess = (props) => {
  const [jsonData, setJsonData] = useState(null);
  const [nomeAdicionar,setNomeAdicionar] = useState("");

  const adicionarUsuario = async() =>{
    const data = {
      idUsuario:localStorage.getItem("idUsuario"),
      idPasta:localStorage.getItem("id_pasta")
    }
    const url = `http://localhost:8080/pasta/adicionarUsuario")}`;

      try {
        await fetch(url, {
          method: "POST",
          body: data,
        })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          window.location.href = window.location.href
        })
      } catch (error) {
        console.log("teve erro",error);
      }
  }
  if (!jsonData) {
      return <div>Carregando...</div>;
  }

  return (
    <div className={props.nomeClasse} onMouseLeave={props.SetIsHoveredOpen} onMouseEnter={props.setIsHoveredClose}>
      <div className="lista_pessoas">
      <Typography variant="h6">Pessoas com acesso</Typography>
        {props.usuarios.map((element,index)=>(
          <Pessoa key={index} nome={element.nomeUsuario} />
        ))}

        <div>
          <InputText
              style={{width:"65%", marginTop:"4vh"}}
              name="nomeUsuario"
              onChange={(event)=>{}}
              placeholder="Pessoa"
              />   
            <Button
              label="Adicionar"
              aria-label="Submit"
              onClick={()=>{}}
              style={{ width: "30%",marginLeft:"10px", paddingLeft:"5px",paddingRight:"5px  "}}></Button>
        </div>
      </div>
    </div>
  );
};
