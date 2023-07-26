import React, { useRef, useState } from "react";
import { Toast } from "primereact/toast";
import { FileUpload } from "primereact/fileupload";

import "../styles/custompanel.css";
import { Typography } from "@mui/material";

export const FileUploadDemo = () => {
  const [file, setFile] = useState(null);

  const onFileSelect = (event) => {
    setFile(event.files[0]);
    console.log(event)
  };


  const onUpload = async(event) => {
    console.log("Upload",event);
    const formData = new FormData();
    formData.append("file", event); 

    const url = `http://localhost:8080/arquivos/upload/${localStorage.getItem("id_pasta")}`;

    try {
      await fetch(url, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
       // window.location.href = window.location.href
      })
    } catch (error) {
      console.log("teve erro",error);
    }
  };

  return (
    <div className="card_file">
      <form className="file_upload">
        <Typography
          variant="h2"
          sx={{ fontSize: 35, fontWeight: "bold", marginBottom: 2 }}
        >
          Carregue seu arquivo
        </Typography>
        <FileUpload
          name="demo[]"
          onUpload={onFileSelect}
          customUpload uploadHandler={onUpload}
          multiple
          accept="image/*"
          maxFileSize={1000000}
          chooseLabel="Escolher"
          
          emptyTemplate={
            <div className="ghost">
              <p className="m-0">Arraste e solte seus arquivos aqui.</p>
            </div>
          }
        />
      </form>
    </div>
  );
};
