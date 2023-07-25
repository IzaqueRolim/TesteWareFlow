import React, { useState } from "react";
import iconPDF from "../../assets/iconPDF.png";
import iconDOCX from "../../assets/iconDOCX.png";
import iconPPTX from "../../assets/iconPPTX.png";

import "./style.css";

export const ArquivoComponent = ({ nomeArquivo, tipo }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(!isHovered);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleDownload = () => {
    // Lógica para download do arquivo
    console.log("Download do arquivo:");
  };
  const handleDelete = () => {
    // Lógica para excluir o arquivo
    console.log("Excluir o arquivo:");
  };

  let iconArquivo = iconDOCX;

  switch (tipo) {
    case "pdf":
      iconArquivo = iconPDF;
      break;
    case "docx":
      iconArquivo = iconDOCX;
      break;
    case "pptx":
      iconArquivo = iconPPTX;
      break;
    default:
      break;
  }

  return (
    <div
      className="containerArquivo"
      onClick={handleMouseEnter}
    >
      <div className="divArquivo">
        <img src={iconArquivo} />
        <span>{nomeArquivo}</span>
      </div>
      {isHovered && (
        <div className="buttons">
          <button className="botaoEscondido" onClick={handleDownload}>
            {" "}
            <span class="pi pi-download"></span>
          </button>
          <button className="botaoEscondido" onClick={handleDelete}>
            <span class="pi pi-trash"></span>
          </button>
        </div>
      )}
    </div>
  );
};
