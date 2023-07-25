import React, { useState,useEffect } from 'react';
import { ArquivoComponent } from "../ArquivoComponent";

import { FileUploadBasic } from "../../components/FileUploadBasic";
import './style.css'

export const ListaArquivo = (props)=>{
    
    if (!props.arquivos) {
      return <div>Carregando...</div>;
  }

    return (
        <div className="listaArquivo">
            {props.arquivos.map((element,index)=>(
                <ArquivoComponent key = {index} nomeArquivo={element.name} tipo ={element.tipo}/>
            ))}
            <FileUploadBasic />
        </div>
    );
}