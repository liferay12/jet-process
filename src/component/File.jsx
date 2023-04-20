import React, { useEffect, useState } from 'react'
import fileFormJSOn from "../json-data/fileForm.json";
import Form from '../library/renderer/FormRenderer';
import { DataTabel } from './FileTabel';
import axios from "axios"
export const File = (props) => {
    let putURL = "";
    const [docFile, setDocFile] = useState({});
    const [url, setURL] = useState();
    const [requestType, setRequestType] = useState()
    useEffect(() => {

        fileFormJSOn.urls.map((urlConfig) => {
            if (urlConfig.type === "POST") {
                setRequestType(urlConfig.type)
                setURL(urlConfig.url);
            }

        })
        console.log("???????????");
        console.log(url)
        if (props.data != 0 && props.data != undefined) {
            fileFormJSOn.urls.map((urlConfig) => {
                if (urlConfig.type === "PUT") {
                    setRequestType(urlConfig.type)
                    setURL(urlConfig.url)
                }

            })
            fetchDocFile(url, 52);
        }
    }, [])

    async function fetchDocFile(url, id) {
        putURL = `${url}/${id}`;
        let data = await axios.get(putURL);
        let editData = data.data;
        setDocFile(editData)
    };
    return (
        <div className='Home'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 card'>
                    {alert(requestType)}
                    <Form formObject={fileFormJSOn} editData={docFile} url={url} requestType={requestType} />
                </div>
                {/* <DataTabel data={FilterUsers} setSearch={setSearch} url={""}></DataTabel> */}
            </div>
        </div>
    )
}
