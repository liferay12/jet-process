import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import PDFPlayer from 'react-player';

import { useDropzone } from "react-dropzone";
import { useState } from "react";

export const UploadPreview = () => {
    const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    const [file, setFile] = useState();
    const files = acceptedFiles.map(file => (
        <li key={file.path}>
            {/* <embed src={file.path} type="application/pdf" width="400px" height="400px">
            </embed> */}

            {file.path} - {file.size} bytes
            {/* <PDFPlayer url={file.path} width={500} height={500}></PDFPlayer> */}

        </li>

    ));

    // if (files) return (
    //     <div className="uploads">
    //         <ul>
    //             {Array.from(files).map((file, idx) => <li key={idx}>{file.name}</li> )}
    //         </ul>
    //         <div className="actions">
    //             <button onClick={() => setFiles(null)}>Cancel</button>
    //             <button onClick={handleUpload}>Upload</button>
    //         </div>
    //     </div>
    //   )


    return (
        <section className="container">
            <div {...getRootProps({ className: 'dropzone' })}>
                <input {...getInputProps()} />
                <p className="text-center m-5" >Drag 'n' drop some files here, or click to select files</p>
            </div>
            <aside>
                <h4>Files</h4>
                <ul>{files}</ul>
                {/* <div className='pdf-container'>
                    <Viewer
                        fileUrl={files}
                        
                    />
                </div> */}
                <Viewer
                    fileUrl='/assets/pdf-open-parameters.pdf'
                    plugins={[
                        // Register plugins
                        defaultLayoutPluginInstance
]}
                />
            </aside>
        </section>
    );
}