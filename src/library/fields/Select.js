import React from 'react';
import ReactSelect from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import 'jquery/dist/jquery';
import { useState, useEffect } from "react";
import axios from "axios"

const Select = (props) => {
    const [provider, setProvider] = useState([]);

    useEffect(() => {
        console.log(" calling provider......")
        console.log("------> ")
        if (props.fieldConfig.provider.url != "") {
            getProviderList(props.fieldConfig.provider.url);
        }

    }, [])

    async function getProviderList(url) {
        let data = await axios.get(url)
        let data1 = [];
        data.data.map((item) => {
            let obj = { value: item.id, label: item.email };
            data1.push(obj);
        })
        setProvider(data1)
    };



    return (
        <div className='form-group mt-3'>
            <label htmlFor={props.fieldConfig.id}>{props.fieldConfig.label}</label>
            <ReactSelect

                id={props.fieldConfig.id}

                name={props.fieldConfig.name}
                className={props.fieldConfig.classes}
                placeholder={props.fieldConfig.placeholder}
                onChange={props.changed}
                disabled={props.fieldConfig.config.disabled}
                readOnly={props.fieldConfig.config.readOnly}
                hidden={props.fieldConfig.config.hidden}
                required={props.fieldConfig.validation.required}
                autocomplete={props.fieldConfig.validation.autocomplete}
                autofocus={props.fieldConfig.validation.autofocus}
                options={provider}
            // multiple={props.fieldConfig.multiple}
            // suggestion={props.fieldConfig.suggestion}
            />
        </div>
    );
}

export default Select;