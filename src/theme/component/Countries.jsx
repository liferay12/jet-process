import React, { useState, useEffect } from "react";
import Table from "../../component/Table";
import DataTable from "react-data-table-component";
import axios from "axios";

const Countries = () => {
    //const [columns, setcolumns] = useState([]);
    const [Countries, setCountries] = useState([]);
    //const [Errors, setErrors] = useState([]);
    const [search, setSearch] = useState("");
    const [FilterCountry, setFilterCountry] = useState([]);

    useEffect(() => {
        async function fetchData() {
            //let res = await fetch("https://restcountries.com/v2/all");
            //res.json().then(res => setCountries(res)).catch(err => setErrors(err));
            
            let res = await axios.get("https://restcountries.com/v2/all");
            setCountries(res.data);
            setFilterCountry(res.data);
        };
        fetchData();
    }, []);

    const column = [
        {
            name: "Country Name",
            selector: (row) => row.name,
            sortable: true
        },
        {
            name: "Country Native Name",
            selector: (row) => row.nativeName,
            sortable: true
        },
        {
            name: "Country Capital",
            selector: (row) => row.capital,
            sortable: true
        },
        {
            name: "Country flag",
            selector: (row) => <img width={50} src={row.flag}></img>,
            sortable: true
        },
        {
            name: "Actions",
            cell: row => <button className="btn btn-primary" onClick={() => alert(row.alfa2Code)}>Edit</button>
        }
    ];

    useEffect(()=>{
        const result = Countries.filter(country => {
            return country.name.toLowerCase().match(search.toLowerCase());
        })
        setFilterCountry(result);
    },[search]);

    return (
        <>
            <div style={{marginTop:"-1.875rem"}}>
                {/* <span>{JSON.stringify(planets)}</span>
                <hr />
                <span>Has error: {JSON.stringify(hasError)}</span> */}

                {/* <h1>Datatable of planents</h1> */}

                <DataTable
                    title="Country List"
                    columns={column}
                    data={FilterCountry}
                    pagination
                    fixedHeader
                    fixedHeaderScrollHeight="25rem"
                    selectableRows
                    selectableRowsHighlight
                    highlightOnHover
                    actions={<button className="btn btn-sm btn-info">Export</button>}
                    subHeader
                    subHeaderComponent={
                        <input 
                            type="text" 
                            placeholder="Search here" 
                            className="w-25 form-control" 
                            value={search}
                            onChange={(e)=> setSearch(e.target.value)}
                            
                        />}
                    subHeaderAlign="left"
                />

            </div>
        </>
    );
};
export default Countries;