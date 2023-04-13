import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import 'jquery/dist/jquery';

const Radio = (props) => {

    return (
        <div className="form-group mt-3">
            <label>{props.fieldConfig.label}</label>
            <br />
            {props.fieldConfig.options.map((option) => {
                return <span key={option.id}><input type={props.fieldConfig.type}
                    className={props.fieldConfig.classes}
                    name={props.fieldConfig.name}
                    id={option.id}
                    onChange={props.changed}
                    value={option.value}
                /> <label htmlFor={option.id}>{option.label}</label>&nbsp;&nbsp;&nbsp;</span>
            })}
        </div>
    )
}
export default Radio;