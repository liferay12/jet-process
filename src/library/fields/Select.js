import React from 'react';
import ReactSelect from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import 'jquery/dist/jquery';
import { useState, useEffect } from "react";
import axios from "axios"

const Select = (props) => {
    const [provider, setProvider] = useState([]);
    const [defaultValue, setDefaultValue] = useState({ value: "", label: "" });
    useEffect(() => {
        console.log(" calling provider......")
        console.log("------> ")
        console.log("====" + props.fieldConfig.options.data)
        if (props.fieldConfig.provider.url !== "") {
            setDefaultValue({ value: props.fieldConfig.provider.value, label: props.fieldConfig.provider.label })
            getProviderList(props.fieldConfig.provider.url);
        } else {
            console.log("====" + props.fieldConfig.options.data)
            setDefaultValue({ value: props.fieldConfig.options.value, label: props.fieldConfig.options.label })
            setProvider(props.fieldConfig.options.data)
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
            {console.log(defaultValue.label)}
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
                defaultValue={props.fieldConfig.options.selectedValue || 'Select'}
            // multiple={props.fieldConfig.multiple}
            // suggestion={props.fieldConfig.suggestion}
            />
        </div>
    );
}

export default Select;