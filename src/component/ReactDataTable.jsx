import DataTable from 'react-data-table-component';
import React, { useContext, useEffect } from "react";
import FileList, { FileColumn, FileData } from "./FileList";

export const ReactDataTable = (props) => {
    const FileColumnTitle = useContext(FileColumn.title);
    const Filedata = useContext(FileData);
    const FileColumns = props.filecolumn;


    console.log(FileData);
    return (
        <>
            {console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-")}
            {console.log(FileColumns)}
            <DataTable
                title={FileColumnTitle}
                columns={FileColumns}
                data={Filedata}
                pagination
                fixedHeader
                fixedHeaderScrollHeight="25rem"
                selectableRows
                selectableRowsHighlight
                highlightOnHover
                // actions={(
                //     <>
                //         <button onClick={onDownload} className="btn btn-sm btn-info">Export</button>
                //         <button onClick={handleClick} className="btn btn-sm btn-primary">+ Add User</button>

                //     </>
                // )}
                subHeader
                // subHeaderComponent={
                //     <input
                //         type="text"
                //         placeholder="Search here"
                //         className="w-25 form-control"
                //         value={props.search}
                //         onChange={(e) => props.setSearch(e.target.value)}

                //     />}
                subHeaderAlign="left"
            />

        </>
    )
}