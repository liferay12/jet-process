import { useEffect, useState } from "react";
import { DataTabel } from "./DataTabel";
import axios from "axios";
import fileFormJSOn from "../json-data/fileForm.json";

export const FileList=()=>{
    const [fileList, setFileList] = useState([]);
    const [search, setSearch] = useState("");
    const [FilterFileList, setFilterFileList] = useState([]);
    useEffect(() => {
        async function fetchFileList() {
            let fileLists = await axios.get('http://localhost:8080/api/v1/docFile') //http://localhost:8080/api/v1/user
            setFileList(fileLists.data);
            setFilterFileList(fileLists.data);
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
            <DataTabel formJSON={fileFormJSOn} data={fileList} setSearch={setSearch} url={'http://localhost:8080/api/v1/docFile'}></DataTabel> 
            {/* localhost:8080/api/v1/user */}
        </>
    )
}