import axios from 'axios';
// import { Button } from 'bootstrap';
import React, { useEffect, useRef, useState } from 'react'
import DataTable from 'react-data-table-component';
import { useDownloadExcel } from 'react-export-table-to-excel';
export const RoleList = () => {
    const [roles, setRoles] = useState([]);
    const [search, setSearch] = useState("");
    const [Filterroles, setFilterroles] = useState([]);
    useEffect(() => {
        async function fetchUserList() {
            let user = await axios.get('http://localhost:8080/api/v1/role')
            console.log("--------" + user);
            setRoles(user.data);
            setFilterroles(user.data);
        };
        fetchUserList();

    }, []);

    useEffect(() => {
        const result = roles.filter(role => {
            return role.name.toLowerCase().match(search.toLowerCase());
        })
        setFilterroles(result);
        console.log("-------++++------" + roles);
    }, [search]);

    const column = [
        {
            name: "User Id",
            selector: (row) => row.roleId,
            sortable: true
        },
        {
            name: "Full Name",
            selector: (row) => row.name + " " + row.title,
            sortable: true
        },
        {
            name: "Screen Name",
            selector: "userName",
            sortable: true
        },
        {
            name: "Type",
            selector: "type",
            sortable: true
        },
        {
            name: "Company Id",
            selector: "userId",
            sortable: true
        },
        {
            name: "Actions",
            cell: (row) => (
                <>
                    <button className="btn btn-sm btn-primary" onClick={() => alert(row.screenName)}><i class="fa fa-pencil"></i></button>
                    <button className="btn btn-sm btn-danger" onClick={() => alert("row.screenName")}><i class="fa fa-trash"></i></button>
                </>
            )

        }
    ];

    const tableRef = useRef(null);
    const { onDownload } = useDownloadExcel({
        currentTableRef: tableRef.current,
        filename: 'roles table',
        sheet: 'roles'
    })
    return (
        <>
            {/* <button className="btn-primary btn btn-sm" onClick={<Finance></Finance>}>Add Role</button> */}
            <DataTable
                title="Role List"
                columns={column}
                data={Filterroles}
                pagination
                fixedHeader
                fixedHeaderScrollHeight="25rem"
                selectableRows
                selectableRowsHighlight
                highlightOnHover
                actions={<button onClick={onDownload} className="btn btn-sm btn-info">Export</button>}
                subHeader
                subHeaderComponent={
                    <input
                        type="text"
                        placeholder="Search here"
                        className="w-25 form-control"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}

                    />}
                subHeaderAlign="left"
            />
        </>
    )
}

