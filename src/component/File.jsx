import React, { useEffect, useState } from 'react'
import fileFormJSOn from "../json-data/fileForm.json";
import Form from '../library/renderer/FormRenderer';
import { DataTabel } from './DataTabel';
import axios from "axios"
export const File = (props) => {
    let putURL = "";
    const [docFile, setDocFile] = useState({});
    useEffect(() => {
        let url = "";
        fileFormJSOn.urls.map((urlConfig) => {
            if (urlConfig.type === "POST") {

                url = urlConfig.url;
            }
        })
        console.log("???????????");
        console.log(url)
        if (props.data != 0 && props.data != undefined) {
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
                    <Form formObject={fileFormJSOn} editData={docFile} />
                </div>
                {/* <DataTabel data={FilterUsers} setSearch={setSearch} url={""}></DataTabel> */}
            </div>
        </div>
    )
}
