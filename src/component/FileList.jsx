import { useEffect, useState } from "react";
import { DataTabel } from "./DataTabel";
import axios from "axios";

export const FileList=()=>{
    const [fileList, setFileList] = useState([]);
    const [search, setSearch] = useState("");
    const [FilterFileList, setFilterFileList] = useState([]);
    useEffect(() => {
        async function fetchFileList() {
            let fileList = await axios.get('') //http://localhost:8080/api/v1/user
            setFileList(fileList.data);
            setFilterFileList(fileList.data);
        };
        fetchFileList();
    }, []);
    useEffect(() => {
        const result = fileList.filter(filelist => {
            filelist.fileid.toLowerCase().match(search.toLowerCase());
        })
        setFilterFileList(result);
    }, [search]);
    return(
        <>
            <DataTabel data={fileList} setSearch={setSearch} url={''}></DataTabel> 
            {/* localhost:8080/api/v1/user */}
        </>
    )
}