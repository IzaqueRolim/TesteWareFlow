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
        <h1>Upload your file</h1>
        <FileUpload
          name="demo[]"
          url="https://primefaces.org/primereact/showcase/upload.php"
          onUpload={onUpload}
          multiple
          accept="image/*"
          maxFileSize={1000000}
          chooseLabel="Escolher"
          
          emptyTemplate={
            <div className="ghost">
              <p className="m-0">Drag and drop files to here to upload.</p>
            </div>
          }
        />
      </div>
    </div>
  );
};
