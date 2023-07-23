import React, { useState } from "react";
import { FileUploadDemo } from "./FileUpload";
import { PeopleAcess } from "./PeopleAcess";
import { Header } from "./Header";
import { ListaArquivo } from "./ListaArquivo";
import {FileUploadBasic} from './FileUploadBasic'
import CopiarColarComponente from "./CopyComponent";

export const Home = () => {
  return (
    <>
      <Header nomeUsuario={"Izaque"} />
      <div className="home">
        {/* <FileUploadDemo /> */}
        <ListaArquivo/>
        <div>
          <PeopleAcess />
          <CopiarColarComponente/>
          <FileUploadBasic/>
        </div>
      </div>
    </>
  );
};
