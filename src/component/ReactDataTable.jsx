import DataTable from 'react-data-table-component';
import React, { useContext, useEffect } from "react";
import { FileContext } from './FileList';

export const ReactDataTable = () => {
    const file = useContext(FileContext);
    useEffect(() => {
        alert(file)
        console.log(file)
    }, [])
    return (
        <>
            <DataTable
                title={file}
                columns={file}
                data={file}
                pagination
                fixedHeader
                fixedHeaderScrollHeight="25rem"
                selectableRows
                selectableRowsHighlight
                highlightOnHover
                actions={(
                    <>
                        {/* <button onClick={onDownload} className="btn btn-sm btn-info">Export</button>
                        <button onClick={handleClick} className="btn btn-sm btn-primary">+ Add User</button> */}

                    </>
                )}
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