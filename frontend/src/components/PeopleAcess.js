import { Typography } from "@mui/material";
import React, { useState } from "react";
import { Foto } from "./Foto";

export const PeopleAcess = () => {
  return (
    <div className="people">
      <Typography>Pessoas com acesso</Typography>
      <div className="lista_pessoas">
        <Foto>Raquel</Foto>
        <p>Raquel Silva</p>
      </div>
    </div>
  );
};
