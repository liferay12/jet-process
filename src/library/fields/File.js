import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function File(props) {
 
return (
            <div className="form-group mt-3">   
                <label htmlFor={props.fieldConfig.label}>Upload Resume</label>
                <input 
                    id={props.fieldConfig.id}
                    type={props.fieldConfig.type}
                    name={props.fieldConfig.name}
                    className={props.fieldConfig.classes}
                    placeholder={props.fieldConfig.placeholder}
                    onChange={props.changed}
                    disabled={props.fieldConfig.config.disabled}
                    readOnly={props.fieldConfig.config.readOnly}
                    hidden={props.fieldConfig.config.hidden}
                    pattern={props.fieldConfig.validation.pattern}
                    required={props.fieldConfig.validation.required}
                    maxLength={props.fieldConfig.validation.maxLength}
                    minLength={props.fieldConfig.validation.minLength}
                    autocomplete={props.fieldConfig.validation.autocomplete}
                    autofocus={props.fieldConfig.validation.autofocus}
                    accept={props.fieldConfig.config.accept}
                    multiple={props.fieldConfig.multiple}
                />
            </div>
        );
}
export default File;