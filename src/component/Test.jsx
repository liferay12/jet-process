import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import fileFormJSON from "../json-data/formv1.json";
import DataTable from 'react-data-table-component';
import { File } from './File';
import axios from 'axios'
import Form from '../library/renderer/FormRenderer';
import DataTableColumn from './file/helper/DataTableColumn';
import json from "../json-data/functionJSON"

export const Test = () => {


   

    let putURL = "";
    const [docFile, setDocFile] = useState({});

    const [url, setURL] = useState();
    const [requestType, setRequestType] = useState();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [column, setColumn] = useState([]);
    const [data, setData] = useState([]);
    const alt = () => {
        alert("Ashwani");

    }

    useEffect(() => {
        // let year = document.getElementById("year").value="20223"
        //  = "2023";
    }, [])


    return (
        <>
            <div className='contianer'>
                <div className='row'>
                    <div className='col-md-12 col-sm-12'>
                        <div className='text-right'>
                            <Button variant="primary" className='text-right' onClick={handleShow}>
                                Create File
                            </Button>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12 col-sm-12'>
                        <DataTable
                            title={"File List"}
                            columns={column}
                            data={data}
                            pagination
                            fixedHeader
                            fixedHeaderScrollHeight="25rem"
                            selectableRows
                            selectableRowsHighlight
                            highlightOnHover
                            actions={(
                                <>

                                </>
                            )}
                            subHeader
                            subHeaderAlign="left"
                        />
                    </div>
                </div>
            </div>

            <Form formObject={json} editData={docFile} url={url} requestType={requestType} />

            <Modal className='modal-xl' show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form formObject={fileFormJSON} editData={docFile} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Create File
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    );
}

