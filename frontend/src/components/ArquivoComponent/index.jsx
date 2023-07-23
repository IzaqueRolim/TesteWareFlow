import iconPDF from '../../assets/iconPDF.png'
import iconDOCX from '../../assets/iconDOCX.png'
import iconPPTX from '../../assets/iconPPTX.png'

import './style.css'

export const ArquivoComponent = ({nomeArquivo,tipo}) =>{

    let iconArquivo = iconDOCX

    switch (tipo) {
        case "PDF":
            iconArquivo = iconPDF;
            break;
        case "DOCX":
            iconArquivo = iconDOCX;
            break;
        case "PPTX":
            iconArquivo = iconPPTX;
            break;
        default:
            break;
    }

    return (  
        <div className="divArquivo">
            <img src={iconArquivo} />
            <span>{nomeArquivo}</span>
        </div>
    )
}