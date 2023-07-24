import { Typography } from "@mui/material";
import React, { useState,useEffect } from "react";
import { Foto } from "./Foto";
import { Pessoa } from "./Pessoa";

export const PeopleAcess = (props) => {
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/DadosTestes/pasta.json'); // Caminho para o arquivo JSON
        const data = await response.json();
        setJsonData(data);
      } catch (error) {
        console.error('Erro ao buscar o JSON:', error);
      }
    };

    fetchData();
  }, []);
   
  if (!jsonData) {
      return <div>Carregando...</div>;
  }

  return (
    <div className="people">
      <Typography variant="h6">Pessoas com acesso</Typography>
      <div className="lista_pessoas">
        {props.usuarios.map((element,index)=>(
          <Pessoa key={index} nome={element.nomeUsuario} />
        ))}
      </div>
    </div>
  );
};
