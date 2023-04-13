import React from 'react'
import Home from './Home'
import DataTable from 'react-data-table-component';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

export default function Employee() {
    const [employee, setEmployee] = useState([]);

    const column = [
        {
            name: "Employee Name",
            selector: (row) => row.firstName,
            sortable: true
        },
        {
            name: "Email",
            selector: (row) => row.email,
            sortable: true
        },
        {
            name: "Age",
            selector: (row) => row.age,
            sortable: true
        },
        {
            name: "Gender",
            selector: (row) => row.gender,
            sortable: true
        },
        {
            name: "Phone",
            selector: (row) => row.phone,
            sortable: true
        }
        ,
        {
            name: "Actions",
            cell: row => <button className="btn btn-primary" onClick={() => alert(row.alfa2Code)}>Edit</button>,

        }

    ];

    useEffect(() => {
        async function fetchData() {

            let res = await axios.get("https://dummyjson.com/users");
            console.log(res.data.users)
            setEmployee(res.data.users);
        };
        fetchData();
    }, []);



    return (
        <>


            <div className='border'>
                <DataTable
                    title="Employee"
                    columns={column}
                    data={employee}
                    pagination
                    fixedHeader
                    fixedHeaderScrollHeight="25rem"
                    highlightOnHover
                    subHeaderAlign="left"
                />
            </div>


        </>
    )
}
