import React from "react";
import { useDropzone } from "react-dropzone";
import { ReactComponent as Upload } from "../../assets/upload.svg";
import "./file-upload.styles.scss";
const FileUpload = (props) => {
  const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
    // Disable click and keydown behavior
    noClick: true,
    noKeyboard: true,
  });

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <div className="dropzone-container">
      <div {...getRootProps({ className: "dropzone" })} onClick={open}>
        <Upload />
        <div className="content">
          <input {...getInputProps()} />
          <p>Drag 'n' drop your resume here</p>
          <button type="button">Open File Dialog</button>
          <p>{files}</p>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
