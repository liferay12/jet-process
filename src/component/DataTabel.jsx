import React, { useRef } from 'react';
import { useState } from "react";
import { useEffect } from "react";
import DataTable from 'react-data-table-component';
import { useDownloadExcel } from 'react-export-table-to-excel';
import { Button, Dropdown, Modal } from 'react-bootstrap';
import UserRegistration from './UserRegistration';
import columns from '../json-data/DataTableColumns.json';
import { Delete } from './Delete';


export const DataTabel = (props) => {
    const [show, setShow] = useState(false);
    const [column, setColumn] = useState([]);
    const [editrow, setEditrow] = useState();
    const [events, setEvents] = useState();
    const handleClose = () => setShow(false);

    const handleShow = (name, id) => {
        setShow(true);
        setEvents(name);
        setEditrow(id);


    }
    useEffect(() => {
        const fetchedButtons = [];
        columns.map((item, index) => {
            if (item.name === "Actions" && item.cell.length !== 0) {
                fetchedButtons.push({
                    "name": "Actions", cell: (row) => (<>
                        {/* <Dropdown>
                            <Dropdown.Toggle>
                                <i className="fa-thin fa-ellipsis-vertical"></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu> */}
                        <div class="dropdown">
                            <div type="button" data-bs-toggle="dropdown">
                                <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                            </div>
                            <ul class="dropdown-menu">
                                {item.cell.map((i) => {
                                    return (
                                        <>

                                            <li onClick={() => (handleShow(i.name, row.userId))}><span className={i.class} ><i class={i.icon} aria-hidden="true"></i>{i.lebel}</span></li>


                                            {/* <Dropdown.Item onClick={() => (handleShow(i.name, row.userId))}><span className={i.class} ><i class={i.icon} aria-hidden="true"></i>{i.lebel}</span></Dropdown.Item> */}
                                            {/* <button className={i.class} onClick={() => (handleShow(i.name, row.userId))}><i class={i.icon} aria-hidden="true">{i.lebel}</i></button> */}
                                        </>
                                    )
                                })
                                }
                            </ul>
                        </div>
                        {/* </Dropdown.Menu></Dropdown> */}
                    </>)
                })
            } else {
                fetchedButtons.push(item);
            }
        });
        setColumn(fetchedButtons);
    }, []);

    // Check Actions to render component in to the modal
    let modalContent;
    if (events === "edit") {
        modalContent = <UserRegistration data={editrow}></UserRegistration>;
    } else if (events === "delete") {
        modalContent = <Delete data={editrow} url={props.url}></Delete>;
    }
    else if (events === "add") {
        modalContent = <UserRegistration></UserRegistration>;
    }
    else {
        modalContent = <h1 className='text-danger'>Import Component to render in modal</h1>;
    }


    // function addUser() {
    //     console.log("Add user");
    //     modalContent = <UserRegistration></UserRegistration>
    // }

    // Fetch user list from an api
    // const [users, setUsers] = useState([]);
    // const [search, setSearch] = useState("");
    // const [FilterUsers, setFilterUsers] = useState([]);
    // useEffect(() => {
    //     async function fetchUserList() {
    //         let user = await axios.get('http://localhost:8080/api/v1/user')
    //         setUsers(user.data);
    //         setFilterUsers(user.data);
    //     };
    //     fetchUserList();
    // }, []);
    // useEffect(() => {
    //     const result = users.filter(user => {
    //         return null; //user.firstName.toLowerCase().match(search.toLowerCase());
    //     })
    //     setFilterUsers(result);
    // }, [search]);

    // To export table into excell sheet
    const tableRef = useRef(null);
    const { onDownload } = useDownloadExcel({
        currentTableRef: tableRef.current,
        filename: 'Users table',
        sheet: 'Users'
    })

    // const addUser = (add) => {
    //     console.log("Addig user ********************* " + add)
    //     setEvents(add);
    //     handleShow(add);
    //     //modalContent = <UserRegistration></UserRegistration>
    // }

    // Add Button click method
    const [isShown, setIsShown] = useState("");
    const handleClick = event => {
        // 👇️ toggle shown state
        //setIsShown(current => !current);
        setIsShown("add");
        handleShow(isShown, "");

        // 👇️ or simply set it to true
        // setIsShown(true);
    };

    return (
        <>
            <DataTable
                title="User List"
                columns={column}
                data={props.data}
                pagination
                fixedHeader
                fixedHeaderScrollHeight="25rem"
                selectableRows
                selectableRowsHighlight
                highlightOnHover
                actions={(
                    <>
                        <button onClick={onDownload} className="btn btn-sm btn-info">Export</button>
                        <button onClick={handleClick} className="btn btn-sm btn-primary">+ Add User</button>

                    </>
                )}
                subHeader
                subHeaderComponent={
                    <input
                        type="text"
                        placeholder="Search here"
                        className="w-25 form-control"
                        value={props.search}
                        onChange={(e) => props.setSearch(e.target.value)}

                    />}
                subHeaderAlign="left"
            />

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                className='modal-lg'
            >
                <Modal.Header closeButton style={{ background: "#f0f8ff" }}>
                    <Modal.Title className='text-center'>{events} User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {modalContent}
                    {/* {modalCon} */}
                    {/* {isShown ? <UserRegistration /> : modalContent} */}
                    {/* <UserRegistration data={editrow}></UserRegistration> */}
                </Modal.Body>
                {/* <Modal.Footer style={{ background: "#f0f8ff" }}>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                </Modal.Footer> */}
            </Modal>
        </>
    )
}
