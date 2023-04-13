import axios from "axios";
import { useEffect, useState } from "react";
import { DataTabel } from "./DataTabel";

export const UserList = () => {

    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");
    const [FilterUsers, setFilterUsers] = useState([]);
    useEffect(() => {
        async function fetchUserList() {
            let user = await axios.get('http://localhost:8080/api/v1/user')
            setUsers(user.data);
            setFilterUsers(user.data);
        };
        fetchUserList();
    }, []);
    useEffect(() => {
        const result = users.filter(user => {
            user.firstName.toLowerCase().match(search.toLowerCase());
        })
        setFilterUsers(result);
    }, [search]);
    return (
        <>
            <DataTabel data={FilterUsers} setSearch={setSearch} url={'localhost:8080/api/v1/user'}></DataTabel>
        </>
    )


}