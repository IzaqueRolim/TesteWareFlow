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
  const [file,setFile] = useState();

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

  async function handleFile(event){
    setFile(event.target.files[0])
    console.log(event.target.files[0])
  }
  async function handleUpload(e){
    e.preventDefault();
    const formData = new FormData();
    formData.append("file",file);

   
    const url = `http://localhost:8080/arquivo/upload/${localStorage.getItem("id_pasta")}`
    console.log(url)
    try {
    await fetch(url, {
        method: "POST",
        body:formData,
        headers:{
          'Custom-Header': 'value',
        }
      })
      .then(response => response.json())
      .then(data => {
      //  setJsonData(data);
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
        {jsonData.arquivos.length > 0 ? <ListaArquivo arquivos={jsonData.arquivos} /> 
        
        :
        <form className="upload-form" onSubmit={handleUpload} enctype="multipart/form-data">    
          {/* <FileUploadDemo /> */}
          <label htmlFor="fileInput" className="file-input-label">
            Escolher arquivo
            <input type="file" id="fileInput" onChange={handleFile} />
          </label>
          <span>Arraste e solte seus arquivos aqui</span>
          <button>Upload</button>
        </form>
          }

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
