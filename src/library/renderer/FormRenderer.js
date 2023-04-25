import React, { useEffect, useState } from 'react';
import Renderer from './FieldRenderer';
import toast from 'react-hot-toast';
import axios from "axios";
const Form = (props) => {
    let url = "";
    const { formObject } = props;
    const [fieldArray, setFieldArray] = useState(formObject.fields);
    const [formData, setFormData] = useState([]);
    const [methodType, setMethodType] = useState()
    const [requestType, setRequestType] = useState("post");
    // const [fieldData, setFieldData] = useState(props.editData);
    const submit = (e) => {
        e.preventDefault();
        var form = new FormData();
        fieldArray.map((item, index) => {
            if (item.value != "") {
                form.append(item.name, item.value);
            }
        })
        if (props.requestType === "POST") {
            axios.post(props.url, form, {
                headers: {
                    "Content-Type": "application/json"
                }
            }).then((response) => {
                toast.success("Your Form has been succesfully submitted");
            }).catch((err) => {
                console.error(err);
                toast.error("Opps ! Something went wrong")
            })
        }
        if (props.requestType === "PUT") {
            axios.put(props.url, form, {
                headers: {
                    "Content-Type": "application/json"
                }
            }).then((response) => {
                toast.success("Your Form has been succesfully submitted");
            }).catch((err) => {
                console.error(err);
                toast.error("Opps ! Something went wrong")
            })
        }
    }

    // useEffect(() => {
    //     let isEdit = props.editData;
    //     if (props.editData !== "" && props.editData != undefined) {
    //         formObject.urls.map((urlConfig) => {
    //             if (urlConfig.type === "PUT") {
    //                 url = urlConfig.url;
    //                 setMethodType(urlConfig.type)
    //                 setRequestType(urlConfig.type)
    //             }
    //         })
    //     }
    //     if (props.editData === "" && props.editData == undefined) {
    //         formObject.urls.map((urlConfig) => {
    //             if (urlConfig.type === "POST") {
    //                 url = urlConfig.url;
    //                 setMethodType(urlConfig.type)
    //                 setRequestType(urlConfig.type)
    //             }
    //         })
    //     }
    // }, [])


    return (
        <div className='container Form'>
            <h3 className='text-center'>{props.formObject.title}</h3>
            <form onSubmit={(event) => { submit(event) }}>
                <Renderer fieldArray={fieldArray} fieldData={props.editData} setFieldArray={setFieldArray} />
                
            </form>
        </div>
    );
}

export default Form;