import React, { useState } from "react";
import { Foto } from "../Foto";
import "./style.css";

export const Pessoa = ({ nome }) => {
  return (
    <div className="pessoa">
      <Foto>{nome}</Foto>
      <p>{nome}</p>
    </div>
  );
};
