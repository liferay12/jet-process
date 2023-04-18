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
            console.log('item..****.... ', item.value)
            console.log(item.name, "---", item.value)
            console.warn("__.....__ ", requestType)
            if (item.value != "") {
                console.info(item.value)
                form.append(item.name, item.value);

            }
        })



        console.warn(form.get("nature"))
        if (methodType === "POST") {
            axios.post(requestType, form, {
                headers: {
                    "Content-Type": "application/json"
                }
            }).then((response) => {
                console.log(response.data);
                toast.success("Your Form has been succesfully submitted");
            }).catch((err) => {
                console.error(err);
                toast.error("Opps ! Something went wrong")
            })
        }

        if (methodType === "PUT") {

            axios.put(requestType, form, {
                headers: {
                    "Content-Type": "application/json"
                }
            }).then((response) => {
                console.log(response.data);
                toast.success("Your Form has been succesfully submitted");
            }).catch((err) => {
                console.error(err);
                toast.error("Opps ! Something went wrong")
            })
        }

    }

    useEffect(() => {
        let isEdit = props.editData;
        if (props.editData !== "" && props.editData != undefined) {
            console.warn("__.....__ 1-1", url)
            formObject.urls.map((urlConfig) => {
                if (urlConfig.type === "PUT") {
                    url = urlConfig.url;
                    console.warn("__.....__ 1", url)
                    setMethodType(urlConfig.type)
                    setRequestType(urlConfig.type)
                }
            })
        }
        if (props.editData === "" && props.editData == undefined) {
            formObject.urls.map((urlConfig) => {
                if (urlConfig.type === "POST") {
                    url = urlConfig.url;
                    console.warn("__.....__ 2", url)
                    setMethodType(urlConfig.type)
                    setRequestType(urlConfig.type)
                }
            })
        }
    }, [])


    return (
        <div className='container Form'>
            <h3 className='text-center'>{props.formObject.title}</h3>
            <form onSubmit={(event) => { submit(event) }}>
                <Renderer fieldArray={fieldArray} fieldData={props.editData} setFieldArray={setFieldArray} />
                <div className='text-center m-3 mb-2'>
                    {console.log("$$$$$$$$$$$")}

                    {
                        formObject.actions.map((item, index) =>
                            <>
                                {
                                    console.log("--", props.editData)
                                }
                                {console.log(props.editData)}
                                {
                                    item.applyto === "form" && item.name === "update" && Object.keys(props.editData).length != 0 ? (<button key={`${item.id}+${index}`} type={`${item.type}`} id={item.id} className={`${item.classes}`}>{item.label}</button>)
                                        : item.applyto === "form" && item.name === "save" && Object.keys(props.editData).length == 0 ? (<button key={`${item.id}+${index}`} type={`${item.type}`} id={item.id} className={`${item.classes}`}>{item.label}</button>)
                                            : item.applyto === "form" && item.name === "cancel" ? (<button key={`${item.id}+${index}`} type={`${item.type}`} id={item.id} className={`${item.classes}`}>{item.label}</button>) : ""
                                }

                            </>
                        )
                    }
                </div>
            </form>
        </div>
    );
}

export default Form;