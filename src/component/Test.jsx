import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import fileFormJSON from "../json-data/formv1.json";
import DataTable from 'react-data-table-component';
import { File } from './File';
import axios from 'axios'
import Form from '../library/renderer/FormRenderer';
import DataTableColumn from './file/helper/DataTableColumn';
export const Test = () => {
    let putURL = "";
    const [docFile, setDocFile] = useState({});
    const [url, setURL] = useState();
    const [requestType, setRequestType] = useState()
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [column, setColumn] = useState([]);
    const [data, setData] = useState([]);
    useEffect(() => {
        getFileList();
        setColumn(DataTableColumn(fileFormJSON))
    }, []);

    const getFileList = async () => {
        const response = await axios.get('http://localhost:8080/api/v1/docFile').catch((err) => {
            console.error("Error While Getting file list : ", err);
        })
        console.log("Response......");
        console.log(response.data)
        setData(response.data);
    }


    useEffect(() => {

        fileFormJSON.urls.map((urlConfig) => {
            if (urlConfig.type === "POST") {
                setRequestType(urlConfig.type)
                setURL(urlConfig.url);
            }

        })
        console.log(url)
        // if (props.data != 0 && props.data != undefined) {
        //     fileFormJSON.urls.map((urlConfig) => {
        //         if (urlConfig.type === "PUT") {
        //             setRequestType(urlConfig.type)
        //             setURL(urlConfig.url)
        //         }

        //     })
        //     fetchDocFile(url, 52);
        // }
    }, [])

    async function fetchDocFile(url, id) {
        putURL = `${url}/${id}`;
        let data = await axios.get(putURL);
        let editData = data.data;
        setDocFile(editData)
    };


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






            <Modal className='modal-xl' show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form formObject={fileFormJSON} editData={docFile} url={url} requestType={requestType} />
                </Modal.Body>
                {/* <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Create File
                    </Button>
                </Modal.Footer> */}
            </Modal>

        </>
    );
}