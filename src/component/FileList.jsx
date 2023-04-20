import { createContext, useEffect, useState } from "react";
import { FileTabel } from "./FileTabel";
import axios from "axios";
import fileFormJSOn from "../json-data/fileForm.json";
export const FileContext = createContext();
export const FileList = () => {
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
    FileContext={data:{}, formJSON:{}, setSearch:{}};
    return (
        <>
            <FileContext.Provider data={fileList} formJSON={fileFormJSOn} setSearch={setSearch}>
                <FileTabel  url={'http://localhost:8080/api/v1/docFile'}></FileTabel>
                {/* localhost:8080/api/v1/user */}
            </FileContext.Provider>
        </>
    )
}