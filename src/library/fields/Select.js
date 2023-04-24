import React from 'react';
import ReactSelect from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import 'jquery/dist/jquery';
import { useState, useEffect } from "react";
import axios from "axios"
let a = {};
const Select = (props) => {
    const [provider, setProvider] = useState([]);
    const [defaultValue, setDefaultValue] = useState({});
    const [val, setVal] = useState({});
    useEffect(() => {

        if (props.fieldConfig.provider.url !== "") {
            setDefaultValue({ value: props.fieldConfig.provider.value, label: props.fieldConfig.provider.label })
            getProviderList(props.fieldConfig.provider.url);
        } else {
            setProvider(props.fieldConfig.provider.options)
        }
        setDefaultValue(a);

    }, [])

    async function getProviderList(url) {
        let data = await axios.get(url).catch((err) => {
            console.error("Anable to fetch data : "+err);
        })
        let data1 = [];
        data.data.map((item) => {
            let id = item.id;
            let value = item.name;
            let obj = { value: id, label: value };
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
                defaultValue={props.fieldConfig.provider.selectedValue || 'select'}
            // multiple={props.fieldConfig.multiple}
            // suggestion={props.fieldConfig.suggestion}
            />
        </div>
    );
}

export default Select;