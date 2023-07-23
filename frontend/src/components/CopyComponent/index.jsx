import React, { useState } from 'react';
import './style.css'

function CopiarColarComponente() {
  const [conteudoCopiado, setConteudoCopiado] = useState(false);

  const textoParaCopiar = "link.com/compartilhamento";

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
