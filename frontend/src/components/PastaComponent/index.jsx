import { useState } from "react";
import iconPasta from "../../assets/iconPasta.png";
import "./style.css";
import { Button, Typography } from "@mui/material";
import { InputText } from "primereact/inputtext";
import { ModalEditar } from "../ModalEditar";
import { ModalExcluir } from "../ModalExcluir";

export const PastaComponent = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [modalEditarIsOpen, setModalEditarIsOpen] = useState(false);
  const [modalExcluirIsOpen, setModalExcluirIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleEdit = () => {
    // Lógica para edit da pasta
    setModalEditarIsOpen(true);
    console.log("Download da pasta:");
  };
  const handleDelete = () => {
    // Lógica para excluir a pasta
    setModalExcluirIsOpen(true);
    console.log("Excluir a pasta:");
  };
  return (
    <>
      <div
        className="containerPasta"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button onClick={props.funcao} className="divPasta">
          <img src={iconPasta} />
          <span>{props.nomePasta}</span>
        </button>
        {isHovered && (
          <div className="buttons">
            <button className="botaoEscondido" onClick={handleEdit}>
              {" "}
              <span class="pi pi-pencil"></span>
            </button>
            <button className="botaoEscondido" onClick={handleDelete}>
              <span class="pi pi-trash"></span>
            </button>
          </div>
        )}
      </div>
      {modalEditarIsOpen ? (
        <ModalEditar
          setModalEditarIsOpen={setModalEditarIsOpen}
          pasta={props.nomePasta}
        />
      ) : (
        <></>
      )}
      {modalExcluirIsOpen ? (
        <ModalExcluir
          setModalExcluirIsOpen={setModalExcluirIsOpen}
          pasta={props.nomePasta}
        />
      ) : (
        <></>
      )}
    </>
  );
};
