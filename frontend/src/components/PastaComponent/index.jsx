import { useState } from "react";
import iconPasta from "../../assets/iconPasta.png";
import "./style.css";
import { Button, Typography } from "@mui/material";
import { InputText } from "primereact/inputtext";
import { ModalEditar } from "../ModalEditar";
import { ModalExcluir } from "../ModalExcluir";
import { useNavigate } from "react-router-dom";

export const PastaComponent = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [modalEditarIsOpen, setModalEditarIsOpen] = useState(false);
  const [modalExcluirIsOpen, setModalExcluirIsOpen] = useState(false);
  const [nomeEditadoPasta, setNomeEditadoPasta] = useState("");
  const navigate = useNavigate();


  async function editar(){
    const data = {
      nomePasta: nomeEditadoPasta
    }
    console.log(data)
    const url = `http://localhost:8080/pasta/${props.id}`;

    try {
      await fetch(url, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setModalEditarIsOpen(false);
        window.location.href = window.location.href
      })
    } catch (error) {
      console.log("teve erro",error);
    }
  }

  async function deletar(){
    const data = {
      emailUsuario: localStorage.getItem("emailUsuario"),
      idPasta: props.id
    }
    console.log(data)
    const url = `http://localhost:8080/pasta`;

    try {
      await fetch(url, {
        method: "DELETE",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        console.log(response)
        setModalExcluirIsOpen(false);
        window.location.href = window.location.href
      })
    } catch (error) {
      console.log("teve erro",error);
    }
  }

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
    
  };

  const handlePasta = () => {
    navigate("/arquivos");
    console.log(props)
    localStorage.setItem("id_pasta",props.id);
  };
  return (
    <>
      <div
        className="containerPasta"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button onClick={handlePasta} className="divPasta">
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
          setNomeEditadoPasta = {setNomeEditadoPasta}
          editarPasta = {editar}
          pasta={props.nomePasta}
        />
      ) : (
        <></>
      )}
      {modalExcluirIsOpen ? (
        <ModalExcluir
          setModalExcluirIsOpen={setModalExcluirIsOpen}
          pasta={props.nomePasta}
          funcaoExcluir={()=>{deletar()}}
        />
      ) : (
        <></>
      )}
    </>
  );
};
