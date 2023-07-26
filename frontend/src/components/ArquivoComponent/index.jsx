import React, { useState } from "react";
import iconPDF from "../../assets/iconPDF.png";
import iconDOCX from "../../assets/iconDOCX.png";
import iconPPTX from "../../assets/iconPPTX.png";
import iconTXT from '../../assets/iconeTXT.png';
import iconIMG from '../../assets/iconIMG.png';
import iconZIP from '../../assets/iconeZIP.png'
import iconeDefault from '../../assets/iconArquivo.png'

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

  const downloadArquivo = () =>{
    const fileUrl = `http://localhost:8080/arquivos/download/${nomeArquivo}`;

    fetch(fileUrl)
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', nomeArquivo);
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      })
      .catch(error => {
        console.error('Erro ao baixar o arquivo:', error);
      });


  }

  let iconArquivo = iconeDefault;

  switch (tipo.toLowerCase()) {
    case "pdf":
      iconArquivo = iconPDF;
      break;
    case "docx":
      iconArquivo = iconDOCX;
      break;
    case "pptx":
      iconArquivo = iconPPTX;
      break;
    case "txt":
      iconArquivo = iconTXT;
      break;
    case "png":
      iconArquivo = iconIMG;
      break;
    case "zip":
      iconArquivo = iconZIP;
      break;
    case "rar":
      iconArquivo = iconZIP;
      break;
    default:
      break;
  }

  const handleRedirect = () => {
    //window.location.href = `http://localhost:8080/arquivos/download/${nomeArquivo}`;
    //window.open(`http://localhost:8080/arquivos/download/${nomeArquivo}`);
  };

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
          <button className="botaoEscondido" onClick={downloadArquivo}>
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
