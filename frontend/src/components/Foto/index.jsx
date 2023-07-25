import React from "react";
import "./style.css";

export const Foto = ({ children,color }) => {
  return <div className="circulo" style={{backgroundColor:color}}>{children.slice(0, 1)}</div>;
};
