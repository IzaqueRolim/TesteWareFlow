import { Typography } from "@mui/material";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { useState } from "react";

export const ModalEditar = ({ setModalEditarIsOpen,setNomeEditadoPasta,editarPasta, pasta }) => {
  const [nomePasta, setNomePasta] = useState(pasta);
  return (
    <div className="modalPasta">
      <div className="containerModal">
        <div className="titulo">
          <Typography
            sx={{
              color: "#230D4A",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Editar Pasta: {pasta}
          </Typography>

          <span
            className="p-input-icon-left"
            onClick={() => setModalEditarIsOpen(false)}
          >
            <i className="pi pi-times" />
          </span>
        </div>
        <div className="containerInput">
          <InputText
            type="text"
            onChange={(e) => setNomeEditadoPasta(e.target.value)}
            placeholder="Nome da Pasta"
          />
          <Button label="Salvar" aria-label="Submit" onClick={editarPasta}/>
        </div>
      </div>
    </div>
  );
};
