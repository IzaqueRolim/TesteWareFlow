import React, { useState,useEffect } from 'react';
import { ArquivoComponent } from "../ArquivoComponent";

import { FileUploadBasic } from "../../components/FileUploadBasic";
import './style.css'

export const ListaArquivo = (props)=>{
    const [file,setFile] = useState(); 
    
    const handleFile=(event)=>{
        setFile(event.target.files[0])
    }

    useEffect(() => {
        handleUpload();
      }, [file]);
    
    async function handleUpload(){
       
        const formData = new FormData();
        formData.append("file",file);
    
       
        const url = `http://localhost:8080/arquivos/upload/${localStorage.getItem("id_pasta")}`
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
            if(data.id_arquivo!=undefined){
              window.location.href = window.location.href
            }
            console.log(data)
          })
        } catch (error) {
          console.log("teve erro",error);
        }
    
    }

    if (!props.arquivos) {
      return <div>Carregando...</div>;
    }

    return (
        <div className="listaArquivo">
            {props.arquivos.map((element,index)=>(
                <ArquivoComponent key = {index} nomeArquivo={element.name} tipo ={element.tipo}/>
            ))}
             <div className="file-input-container">
                <label htmlFor="file-input" className="custom-file-input">
                    + Adicionar
                </label>
                <input
                    id="file-input"
                    type="file"
                    onChange={handleFile}
                />
                </div>
        </div>
    );
}