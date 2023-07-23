import React, { useState,useEffect } from 'react';
import { PastaComponent } from "../PastaComponent";
import { BotaoAdicionarPasta } from "../BotaoAdicionarPasta";
import "./style.css";
import { Header } from "../Header";

export const ListaPasta = () => {
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/DadosTestes/usuario.json'); // Caminho para o arquivo JSON
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
    <div className="container">
      <Header nomeUsuario="Raquel" />

      <div className="listaPasta">
        {jsonData.pastas.map((element,index)=>(
          <PastaComponent key = {index} nomePasta={element.nome} />
        ))}
        <BotaoAdicionarPasta />
      </div>
    </div>
  );
};
