import { Typography } from "@mui/material";
import React, { useState } from "react";
import { Foto } from "./Foto";
import { Pessoa } from "./Pessoa";

export const PeopleAcess = () => {
  return (
    <div className="people">
      <Typography variant="h6">Pessoas com acesso</Typography>
      <div className="lista_pessoas">
        <Pessoa nome={"Raquel Silva"} />
        <Pessoa nome={"Izaque Rolim"} />
        <Pessoa nome={"Erika Silva"} />
        <Pessoa nome={"Kezia Suely"} />
      </div>
    </div>
  );
};
