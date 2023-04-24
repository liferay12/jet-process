import React, { useState, useEffect, useMemo } from 'react';
import Select from '../fields/Select';
import Text from '../fields/Text';
import TextArea from '../fields/TextArea';
import CheckBox from '../fields/CheckBox';
import Number from '../fields/Number';
import File from '../fields/File';
import Date from '../fields/Date';
import Radio from '../fields/Radio';
import AutoComplete from '../fields/AutoComplete';
import Tel from '../fields/Tel';
import Email from '../fields/Email';
import Password from '../fields/Password';
import Month from '../fields/Month';
import DateTime from '../fields/DateTime';
import Otp from '../fields/Otp';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import 'jquery/dist/jquery';

const Renderer = (props) => {
    const { formObject } = props.fieldData;
    const [fieldArray, setFieldArray] = useState(props.fieldArray);
    const fieldChange = (event, field, index, fieldData) => {
        console.log(field)
        setFieldArray(prev => prev.map((fGroup, i) => {
            fGroup.fieldGroup.map((item, idx) => {
                if (index === i) {
                    if(i===idx){
                        if (field.type === 'select') {
                            console.log(field.type,event.value)    
                            item.value = event.value;
                            fieldData[field.name] = event.value;
                            // fieldData[event.name] = event.value;
                        } else if (field.type === "tel") {
                            item.value = event;
                            fieldData[event.target.name] = event;
                        } else {
                            item.value = event.target.value;
                            fieldData[event.target.name] = event.target.value;
                        }
                    }
                }
            })

            return fGroup;
        }));
    }
    const initializeForm = () => {
        if (props.fieldData !== "" && props.fieldData != undefined && Object.keys(props.fieldData).length != 0) {
            let keys = Object.keys(props.fieldData);
            keys.map((item, index) => {
                fieldArray.map((fItem, index) => {
                    if (fItem.name === item) {
                        fItem.value = props.fieldData[item];
                    }
                });
            });
        }
        else {
            fieldArray.map((fItem, index) => {
                fItem.value = "";
            });
        }
        return fieldArray;
    }


    const setField = (field, index) => {
        let element = <></>;
        switch (field.type) {
            case 'select': element = (<Select key={field.id} fieldConfig={field} changed={(event) => fieldChange(event, field, index, props.fieldData)} />); break;
            case 'text': element = (<Text key={field.id} fieldConfig={field} changed={(event) => fieldChange(event, field, index, props.fieldData)} />); break;
            case 'textarea': element = (<TextArea key={field.id} fieldConfig={field} changed={(event) => fieldChange(event, field, index, props.fieldData)} />); break;
            case 'checkbox': element = (<CheckBox key={field.id} fieldConfig={field} changed={(event) => fieldChange(event, field, index, props.fieldData)} />); break;
            case 'number': element = (<Number key={field.id} fieldConfig={field} changed={(event) => fieldChange(event, field, index, props.fieldData)} />); break;
            case 'file': element = (<File key={field.id} fieldConfig={field} changed={(event) => fieldChange(event, field, index, props.fieldData)} />); break;
            case 'date': element = (<Date key={field.id} fieldConfig={field} changed={(event) => fieldChange(event, field, index, props.fieldData)} />); break;
            case 'radio': element = (<Radio key={field.id} fieldConfig={field} changed={(event) => fieldChange(event, field, index, props.fieldData)} />); break;
            case 'autocomplete': element = (<AutoComplete key={field.id} fieldConfig={field} changed={(event) => fieldChange(event, field, index, props.fieldData)} />); break;
            case 'email': element = (<Email key={field.id} fieldConfig={field} changed={(event) => fieldChange(event, field, index, props.fieldData)} />); break;
            case 'tel': element = (<Tel key={field.id} fieldConfig={field} changed={(event) => fieldChange(event, field, index, props.fieldData)} />); break;
            case 'password': element = (<Password key={field.id} fieldConfig={field} changed={(event) => fieldChange(event, field, index, props.fieldData)} />); break;
            case 'month': element = (<Month key={field.id} fieldConfig={field} changed={(event) => fieldChange(event, field, index, props.fieldData)} />); break;
            case 'datetime': element = (<DateTime key={field.id} fieldConfig={field} changed={(event) => fieldChange(event, field, index, props.fieldData)} />); break;
            case 'otp': element = (<Otp key={field.id} fieldConfig={field} changed={(event) => fieldChange(event, field, index, props.fieldData)} />); break;
            default: break;
        }
        return element;
    }

    initializeForm();
    return (
        <div className='mt-3'>
            <div className='row'>
                {
                    fieldArray.map((item, index) => {
                        if(item.type === 'group'){
                            (
                                <>
                                    {
                                        item.fields.map((field, index) => {
                                            <div className={`col-md-${12 / item.cols} col-sm-${item.cols}`}>
                                                {setField(field, index)}
                                            </div>
                                        })
                                    }
                                </>
                            )
                        }else{
                            (
                                <div className={`col-md-12 col-sm-12`}>
                                    {setField(item, index)}
                                </div>
                            )
                        }
                    })
                }
            </div>
        </div>
    );
}

export default Renderer;