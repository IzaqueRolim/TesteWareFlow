import React, { useState,useEffect } from "react";
import { FileUploadDemo } from "../../components/FileUpload";
import { PeopleAcess } from "../../components/PeopleAcess";
import { Header } from "../../components/Header";
import { ListaArquivo } from "../../components/ListaArquivo";
import {FileUploadBasic} from '../../components/FileUploadBasic'
import CopiarColarComponente from "../../components/CopyComponent";
import './style.css'
import { json } from "react-router-dom";

export const Home = () => {
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
    <>
      <Header nomeUsuario={jsonData.usuarioProprietario.nomeUsuario} />
      <div className="home">
        {/* <FileUploadDemo /> */}
        <ListaArquivo/>
        <div className="part-2-home">
          <PeopleAcess />
          <CopiarColarComponente/>
          <FileUploadBasic/>
        </div>
      </div>
    </>
  );
};
