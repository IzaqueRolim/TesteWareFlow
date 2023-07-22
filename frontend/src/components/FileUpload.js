import React, { useRef, useState } from "react";
import { Toast } from "primereact/toast";
import { FileUpload } from "primereact/fileupload";

import "../styles/custompanel.css";

export const FileUploadDemo = () => {
  const toast = useRef(null);

  const onUpload = () => {
    toast.current.show({
      severity: "info",
      summary: "Success",
      detail: "File Uploaded",
    });
  };

  return (
    <div className="card_file">
      <div className="file_upload">
        <h1>Carregue seu arquivo</h1>
        <FileUpload
          name="demo[]"
          url="https://primefaces.org/primereact/showcase/upload.php"
          onUpload={onUpload}
          multiple
          accept="image/*"
          maxFileSize={1000000}
          emptyTemplate={
            <div className="ghost">
              <p className="m-0">Arraste e solte seus arquivos aqui.</p>
            </div>
          }
        />
      </div>
    </div>
  );
};
