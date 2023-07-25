import React, { useState, useEffect } from "react";
import { FileUploadDemo } from "../../components/FileUpload";
import { PeopleAcess } from "../../components/PeopleAcess";
import { Header } from "../../components/Header";
import { ListaArquivo } from "../../components/ListaArquivo";
import { FileUploadBasic } from "../../components/FileUploadBasic";
import CopiarColarComponente from "../../components/CopyComponent";
import "./style.css";

export const Home = () => {
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    postUsuario();
  }, []);


  async function postUsuario() {
   
    const url = `http://localhost:8080/pasta/${localStorage.getItem("id_pasta")}`
    console.log(url)
    try {
    await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(response => response.json())
      .then(data => {
        setJsonData(data);
        console.log(data)
      })
    } catch (error) {
      console.log("teve erro",error);
    }
  }

  if (!jsonData) {
    return <div>Carregando...</div>;
  }
  return (
    <>
      <Header usuarios={jsonData.usuarios} titulo={jsonData.nomePasta}/>
      <div className="home">
        {jsonData.arquivos.length > 0 ? <ListaArquivo arquivos={jsonData.arquivos} /> : <FileUploadDemo />}

        <div className="part-2-home">
          {/* <PeopleAcess usuarios={jsonData.usuarios} />
          <CopiarColarComponente
            rota_compartilhamento={jsonData.rota_compartilhamento}
          /> */}
          {/* <FileUploadBasic /> */}
        </div>
      </div>
    </>
  );
};
