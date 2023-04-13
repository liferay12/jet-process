import React, { useEffect, useState } from 'react'
import RoleForm from "../json-data/role.json"
import Form from '../library/renderer/FormRenderer';
import toast from 'react-hot-toast';
import axios from "axios";
export const Role = (props) => {
    const [roleData, setRoleData] = useState({});
    let url = 'http://localhost:8080/api/v1/role';
    useEffect(() => {
        console.log("user id-- : ", props.data)
        if (props.data != 0 && props.data != undefined) {
            fetchUser(props.data);
        }
    }, []);
    async function fetchUser(id) {
        url = `http://localhost:8080/api/v1/role/${id}`;
        let data = await axios.get(url);
        let editData = data.data;
        setRoleData(editData)
    };
    return (
        <div className='Home'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 card'>
                    <Form formObject={RoleForm} editData={roleData} url={url} />
                </div>
            </div>
        </div>
    )
}
