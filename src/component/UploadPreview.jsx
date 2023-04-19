import React, { useState, useCallback, useEffect } from "react";
// Import the dropzone component
import { useDropzone } from "react-dropzone";

export const UploadPreview = () => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  const [a, setA] = useState();
  /* 
    useDropzone hooks exposes two functions called getRootProps and getInputProps
    and also exposes isDragActive boolean
  */
  const op = (e) => {
    console.log(e.target.files[0])
    let u = URL.createObjectURL(e.target.files[0])
    setA(u)
  }

  useEffect(() => {
    // let r=URL.createObjectURL(acceptedFiles)
    // console.log(acceptedFiles[0])
    setA(acceptedFiles)
  }, [acceptedFiles])
  var binaryData = [];
  const onDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("********+++++*****")
    binaryData.push(e.dataTransfer.files[0]);
    setA(window.URL.createObjectURL(new Blob(binaryData, { type: "application/pdf" })))
  }

  return (
    <div className="dropzone-div"  >
      <input className="dropzone-input" type="file" onChange={(e) => { op(e) }} />
      <hr></hr>
      <div className="border" onDragEnter={onDrag} onDragLeave={onDrag} onDragOver={onDrag} onDrop={onDrag} style={{ "width": "200px", "height": "200px" }}></div>
      <hr></hr>
      <embed src={a} type="application/pdf" width="400px" height="400px">
      </embed>
    </div>
  );
}