import React from 'react'
import fileFormJSOn from "../json-data/fileForm.json";
import Form from '../library/renderer/FormRenderer';
import { DataTabel } from './DataTabel';
export const File = () => {
    let url = "";
    return (
        <div className='Home'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 card'>
                    <Form formObject={fileFormJSOn} editData={{}} url={url} />
                </div>
                {/* <DataTabel data={FilterUsers} setSearch={setSearch} url={""}></DataTabel> */}
            </div>
        </div>
    )
}
