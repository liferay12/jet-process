import React, { useState, useCallback, useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
// Import the dropzone component
import { useDropzone } from "react-dropzone";

export const UploadPreview = () => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  const [inputValue, setInputValue] = useState("");
  const [a, setA] = useState();
  const [flag, setFlag] = useState(true);

  /* 
    useDropzone hooks exposes two functions called getRootProps and getInputProps
    and also exposes isDragActive boolean
  */
  const uploadFile = (e) => {
    console.log("from iput field upload -- " + e.target.files[0])
    let u = URL.createObjectURL(e.target.files[0])
    setInputValue(u)
    setFlag(false)
    setA(e.target.value)

  }



  var binaryData = [];
  const onDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("********+++++*****")
    setFlag(false)
    binaryData.push(e.dataTransfer.files[0]);
    setInputValue(window.URL.createObjectURL(new Blob(binaryData, { type: "application/pdf" })))
  }

  const resetUpload = () => {
    setInputValue("");
    setA("");
    setFlag(true)
    inputFileRef.current.value = ""
  }
  // useEffect(() => {
  //   previousInputValue.current = inputValue;
  // }, [inputValue]);

  const inputFileRef = useRef(null);
  const onBtnClick = () => {
    /*Collecting node-element and performing click*/
    inputFileRef.current.click();

  }

  return (
    <form>
      <Container className="" >
        <div onDrop={onDrag} className="border-primary" style={{ width: "50%", height: "30%", margin: "0% 25%" }} >

          {
            flag ? <div className="" style={{ position: "relative", width: "100%" }}>< button type="button" className="btn btn-primary" value={a} onClick={(e) => { onBtnClick(e) }}>upload</button> <p>Please select pdf file to upload</p></div> : <button type="button" onClick={() => { resetUpload() }}>clear</button>

          }
          <input accept="application/pdf" type="file" style={{ display: "none", }} ref={inputFileRef} onChange={(e) => { uploadFile(e) }} />
          <embed src={inputValue} type="application/pdf" width="100%" height="400px" />

        </div>
      </Container>
    </form>
  );
}