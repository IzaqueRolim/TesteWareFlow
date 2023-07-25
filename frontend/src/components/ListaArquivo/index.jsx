import React, { useState,useEffect } from 'react';
import { ArquivoComponent } from "../ArquivoComponent";

import { FileUploadBasic } from "../../components/FileUploadBasic";
import './style.css'

export const ListaArquivo = ()=>{
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
        <div className="listaArquivo">
            {jsonData.arquivos.map((element,index)=>(
                <ArquivoComponent key = {index} nomeArquivo={element.nome} tipo ={element.tipo}/>
            ))}
            <FileUploadBasic />
        </div>
    );
}