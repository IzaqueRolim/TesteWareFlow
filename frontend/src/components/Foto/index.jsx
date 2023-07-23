import React from "react";
import "./style.css";

export const Foto = ({ children }) => {
  return <div className="circulo">{children.slice(0, 1)}</div>;
};
