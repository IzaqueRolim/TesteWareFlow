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

  const handleFileChange = (e) => {
    
    if (e.target.files.length) {
      const inputFile = e.target.files[0];

      setFile(inputFile);
    }
  };


  const onUpload = async(event) => {
    console.log("Upload",event);
    const formData = new FormData();
    formData.append("file", event.files[0]); 
    

      const url = `http://localhost:8080/arquivos/upload/${localStorage.getItem("id_pasta")}`;

      try {
        await fetch(url, {
          method: "POST",
          body: formData,
          headers: {
            "Content-Type": "multipart/form-data",
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
      <div className="file_upload">
        <Typography
          variant="h2"
          sx={{ fontSize: 35, fontWeight: "bold", marginBottom: 2 }}
        >
          Carregue seu arquivo
        </Typography>
        <FileUpload
          name="demo[]"
          onUpload={onFileSelect}
          onChange={handleFileChange}
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
        
      </div>
    </div>
  );
}