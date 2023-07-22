import React, { useState } from "react";
import { FileUploadDemo } from "./FileUpload";
import { PeopleAcess } from "./PeopleAcess";
import { Header } from "./Header";

export const Home = () => {
  return (
    <>
      <Header nomeUsuario={"Izaque"} />
      <div className="home">
        <FileUploadDemo />
        <PeopleAcess />
      </div>
    </>
  );
};
