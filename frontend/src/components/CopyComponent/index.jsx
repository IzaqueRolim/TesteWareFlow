import React, { useState,useEffect } from 'react';
import './style.css'

function CopiarColarComponente() {
  const [conteudoCopiado, setConteudoCopiado] = useState(false);

  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/DadosTestes/pasta.json'); // Caminho para o arquivo JSON
        const data = await response.json();
        
        setJsonData(data);
      } catch (error) {
        console.error('Erro ao buscar o JSON:', error);
      }
    };

    fetchData();
  }, []);
  
  
  if (!jsonData) {
    return <div>Carregando...</div>;
  }

  const textoParaCopiar = jsonData.rota_compartilhamento;

  const copiarParaAreaDeTransferencia = () => {
    navigator.clipboard.writeText(textoParaCopiar)
      .then(() => {
        setConteudoCopiado(true);
        setTimeout(() => setConteudoCopiado(false), 1500);
    })
      .catch(error => console.error('Erro ao copiar: ', error));
  };

  return (
    <div className='divCopy'>
        <div className='textoCopiar'>
            <p>{textoParaCopiar}</p>
        </div>
      <button className='botaoCopiar' onClick={copiarParaAreaDeTransferencia}>
        {conteudoCopiado ? 'Copiado!' : 'Copiar'}
      </button>
    </div>
  );
}

export default CopiarColarComponente;
