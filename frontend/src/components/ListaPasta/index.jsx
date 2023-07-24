import React, { useState,useEffect } from 'react';
import { PastaComponent } from "../PastaComponent";
import { BotaoAdicionarPasta } from "../BotaoAdicionarPasta";
import "./style.css";
import { Header } from "../Header";
import { useNavigate } from 'react-router-dom';
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

export const ListaPasta = () => {
  const [jsonData, setJsonData] = useState(null);
  const [nomePasta, setNomePasta] = useState("");
  const [modalIsOpen, setModalIsOpen]=useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/DadosTestes/usuario.json'); // Caminho para o arquivo JSON
        const data = await response.json();
        setJsonData(data);
      } catch (error) {
        console.error('Erro ao buscar o JSON:', error);
      }
    };

    fetchData();
  }, []);

  const handlePasta = () =>{
    navigate("/arquivos")
  }

  const mostrarModal = ()=>{
    setModalIsOpen(true);
    console.log("modalIsOpen")
  }
  
  const esconderModal = ()=>{
    setModalIsOpen(false);
  }

  if (!jsonData) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="container">
      <Header nomeUsuario="Raquel" />

      <div className="listaPasta">
        {jsonData.pastas.map((element,index)=>(
          <PastaComponent key = {index} nomePasta={element.nome} funcao={handlePasta}/>
        ))}
        <BotaoAdicionarPasta onClick={()=>setModalIsOpen(true)} />
      </div>

      {
        modalIsOpen?<div className='modalPasta'>
            <div className='containerModal'>
              <h2>Criar nova Pasta</h2>
              <button onClick={esconderModal}>X</button>
              <InputText
                value={nomePasta}
                type="text"
                onChange={(e) => setNomePasta(e.target.value)}
                placeholder="Nome da Pasta"
              />
              <Button label="Criar" aria-label="Submit"  />
            </div>
          </div>:<></>
      }
      
    </div>
  );
};
