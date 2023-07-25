import { Typography } from "@mui/material";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { useState } from "react";

export const ModalExcluir = ({ setModalExcluirIsOpen, pasta }) => {
  const [nomePasta, setNomePasta] = useState("");
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
            Tem certeza que deseja excluir a pasta: {pasta}?
          </Typography>

          <span
            className="p-input-icon-left"
            onClick={() => setModalExcluirIsOpen(false)}
          >
            <i className="pi pi-times" />
          </span>
        </div>
        <div className="containerInput">
          <Button label="Excluir" aria-label="Submit" />
        </div>
      </div>
    </div>
  );
};
