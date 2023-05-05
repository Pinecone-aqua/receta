import React from "react";
import { FileUpload } from "primereact/fileupload";

export default function UploadFileSec() {
  return (
    <div className="card">
      <FileUpload
        name="selectedOne"
        url={"/api/upload"}
        multiple
        accept="image/*"
        maxFileSize={10000}
        emptyTemplate={
          <p className="m-0">Drag and drop files to here to upload.</p>
        }
      />
    </div>
  );
}
