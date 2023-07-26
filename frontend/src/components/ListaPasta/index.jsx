import React, { useState, useEffect } from "react";
import { PastaComponent } from "../PastaComponent";
import { BotaoAdicionarPasta } from "../BotaoAdicionarPasta";
import "./style.css";
import { Header } from "../Header";
import { useNavigate } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { IconButton, Typography } from "@mui/material";

export const ListaPasta = () => {
  const [jsonData, setJsonData] = useState(null);
  const [nomePasta, setNomePasta] = useState("");
  const [nomeNovaPasta, setNomeNovaPasta] = useState("")
  const [modalCriarPastaIsOpen, setModalCriarPastaIsOpen] = useState(false);
  const [email,setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    postUsuario();
  }, []);


  async function adicionarUsuario() {
    const data = {
      emailUsuario: email,
      idPasta:localStorage.getItem("id_pasta")
    }
    console.log(data)

    try {
      await fetch("http://localhost:8080/pasta/adicionarUsuario", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(response => response.json())
      .then(data => {
        // Aqui você tem acesso aos dados do corpo da resposta em formato JSON
        console.log(data);
        window.location.href = window.location.href
      })
    } catch (error) {
      console.log("teve erro",error);
    }
  }

  async function postUsuario() {
    const url = `http://localhost:8080/usuario/${localStorage.getItem("idUsuario")}`
    console.log(url)
    try {
    await fetch(url, {
        method: "GET"
      })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        if(data.pastas==undefined){
          navigate("/");
        }
        setJsonData(data);
        localStorage.setItem("emailUsuario",data.email);
      })
    } catch (error) {
      console.log("teve erro",error);
    }
  }

  async function criarPasta(){
    const data = {
      nomePasta: nomeNovaPasta
    }
    console.log(data)
    const url = `http://localhost:8080/pasta/${localStorage.getItem("idUsuario")}`;

    try {
      await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setModalCriarPastaIsOpen(false);
        window.location.href = window.location.href
      })
    } catch (error) {
      console.log("teve erro",error);
    }
  }

  if (!jsonData) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="container">
      <Header usuarios={[]} titulo={"Bem vindo, " + jsonData.nome} nomeUsuario={jsonData.nome} />

      <div className="listaPasta">
        {jsonData.pastas.map((element, index) => (
          <PastaComponent
            key={element.id_pasta}
            nomePasta={element.nomePasta}
            
            id={element.id_pasta}
          />
        ))}
        <BotaoAdicionarPasta funcao={() => setModalCriarPastaIsOpen(true)} />
      </div>

      {modalCriarPastaIsOpen ? (
        <div className="modalPasta">
          <div className="containerModal">
            <div className="titulo">
              <Typography
                sx={{
                  color: "#230D4A",
                  fontWeight: "bold",
                }}
              >
                Criar nova Pasta
              </Typography>

              <span
                className="p-input-icon-left"
                onClick={() => setModalCriarPastaIsOpen(false)}
              >
                <i className="pi pi-times" />
              </span>
            </div>
            <div className="containerInput">
              <InputText
                type="text"
                onChange={(e) => setNomeNovaPasta(e.target.value)}
                placeholder="Nome da Pasta"
              />
              <Button label="Criar" aria-label="Submit"  onClick={criarPasta}/>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
