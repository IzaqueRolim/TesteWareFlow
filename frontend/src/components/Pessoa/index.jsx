import React, { useState } from "react";
import { Foto } from "../Foto";
import "./style.css";

export const Pessoa = ({ nome }) => {
  return (
    <div className="pessoa">
      <Foto>{nome}</Foto>
      <span>{nome.slice(0,13)+"..."}</span>
    </div>
  );
};
