 const json = {
    "id": "fileForm",
    "title": "Create Employee",
    "subtitle": "New Employee Registration",
    "namespace": "",
    "enctype": "multipart/form-data",
    "fields": [
        {
            "type": "group",
            "name": "nameGroup",
            "label": "file type",
            "cols": 2,
            "fields": [
                {
                    "type": "select",
                    "name": "nature",
                    "label": "Nature",
                    "cssClass": "",
                    "options": [
                        {
                            "value": "1",
                            "label": "Physical"
                        },
                        {
                            "value": "2",
                            "label": "Electronic",
                            "selected": "selected"
                        }
                    ],
                    "required": false
                },
                {
                    "type": "select",
                    "name": "type",
                    "label": "Type",
                    "cssClass": "",
                    "options": [
                        {
                            "value": "1",
                            "label": "SFS"
                        },
                        {
                            "value": "2",
                            "label": "NON-SFS",
                            "selected": "selected"
                        }
                    ],
                    "required": false
                }
            ]
        },
        {
            "type": "select",
            "name": "basicHead",
            "label": "Basic-Head",
            "cssClass": "",
            "options": [
                {
                    "value": "1",
                    "label": "SFS"
                },
                {
                    "value": "2",
                    "label": "NON-SFS",
                    "selected": "selected"
                }
            ],
            "required": false
        },
        {
            "type": "email",
            "name": "emailAddress",
            "label": "Email",
            "cssClass": "form-control",
            "required": false,
            "disabled": false,
            "readOnly": false,
            "checked": false,
            "hidden": false
        },
        {
            "type": "password",
            "name": "password_",
            "label": "Password",
            "cssClass": "form-control",
            "minLength": 8,
            "required": false,
            "listable": false,
            "searchable": false,
            "disabled": false,
            "readOnly": false,
            "checked": false,
            "hidden": false
        },
        {
            "type": "date",
            "name": "createDate",
            "label": "Create Date",
            "cssClass": "form-control",
            "required": false,
            "disabled": false,
            "readOnly": false,
            "checked": false,
            "hidden": false
        },
        {
            "type": "date",
            "name": "passwordModifiedDate",
            "label": "Modify Date",
            "cssClass": "form-control",
            "required": false,
            "listable": false,
            "searchable": false,
            "disabled": false,
            "readOnly": false,
            "checked": false,
            "hidden": false
        },
        {
            "type": "number",
            "name": "id",
            "label": "User Id",
            "cssClass": "form-control",
            "required": false,
            "disabled": false,
            "readOnly": false,
            "checked": false,
            "hidden": false
        },
        {
            "type": "list",
            "name": "qualifications",
            "label": "Qualifications",
            "cssClass": "form-control",
            "required": false,
            "editable": true,
            "editMode": "inline",
            "fields": [
                {
                    "type": "text",
                    "name": "Grade",
                    "label": "Grade",
                    "cssClass": "form-control",
                    "required": false,
                    "placeHolder": "Grade",
                    "disabled": false,
                    "readOnly": false,
                    "checked": false,
                    "hidden": false,
                    "showLabel": false
                },
                {
                    "type": "text",
                    "name": "institution",
                    "label": "School/University",
                    "cssClass": "form-control",
                    "placeHolder": "School/University",
                    "disabled": false,
                    "readOnly": false,
                    "checked": false,
                    "hidden": false,
                    "showLabel": false
                },
                {
                    "type": "text",
                    "name": "passingYear",
                    "label": "Passing Year",
                    "cssClass": "form-control",
                    "required": false,
                    "placeHolder": "Passing Year",
                    "disabled": false,
                    "readOnly": false,
                    "checked": false,
                    "hidden": false,
                    "showLabel": false
                },
                {
                    "type": "text",
                    "name": "marks",
                    "label": "Marks(%)",
                    "cssClass": "form-control",
                    "required": false,
                    "placeHolder": "Marks(%)",
                    "disabled": false,
                    "readOnly": false,
                    "checked": false,
                    "hidden": false,
                    "showLabel": false
                }
            ],
            "actions": [
                {
                    "name": "delete",
                    "type": "link",
                    "label": "fa-minus-circle",
                    "cssClass": "form-control",
                    "applyTo": "row",
                    "handler": {
                        "type": "javascript",
                        "func": "submitForm(event)",
                        "method": "post",
                        "url": "http://localhost:8082/api/v1/user"
                    }
                },
                {
                    "name": "add",
                    "type": "link",
                    "label": "fa-plus-circle",
                    "cssClass": "form-control",
                    "applyTo": "row",
                    "handler": {
                        "type": "javascript",
                        "func": "submitForm(event)",
                        "method": "post",
                        "url": "http://localhost:8082/api/v1/user"
                    }
                }
            ]
        },
        {
            "type": "radio",
            "name": "citizen",
            "label": "Are you an INDIAN Citizen?",
            "cssClass": "",
            "required": false,
            "options": [
                {
                    "value": "yes",
                    "label": "Yes",
                    "checked": "checked"
                },
                {
                    "value": "no",
                    "label": "No"
                }
            ]
        },
        {
            "type": "radio",
            "name": "disability",
            "label": "Are you  Physically Handicaped ?",
            "cssClass": "form-control",
            "required": false,
            "provider": {
                "url": "https://mocki.io/v1/6e76eae7-a3b1-44cb-8e75-4526106568b7"
            }
        },
        {
            "type": "select",
            "name": "maritalStatus",
            "label": "Marital Status",
            "cssClass": "",
            "options": [
                {
                    "value": "md",
                    "label": "Married"
                },
                {
                    "value": "um",
                    "label": "Unmarried",
                    "selected": "selected"
                },
                {
                    "value": "dc",
                    "label": "Divorced"
                }
            ],
            "required": false
        },
        {
            "type": "select",
            "name": "bloodGroup",
            "label": "Blood Group",
            "cssClass": "",
            "options": [
                {
                    "value": "op",
                    "label": "O+"
                },
                {
                    "value": "on",
                    "label": "O-"
                },
                {
                    "value": "ap",
                    "label": "A+"
                },
                {
                    "value": "an",
                    "label": "A-"
                },
                {
                    "value": "bp",
                    "label": "B+"
                },
                {
                    "value": "bn",
                    "label": "B-"
                },
                {
                    "value": "abp",
                    "label": "AB+"
                },
                {
                    "value": "abn",
                    "label": "AB-"
                }
            ],
            "required": false,
            "value": "ap"
        },
        {
            "type": "select",
            "name": "country",
            "label": "Country",
            "cssClass": "",
            "required": false,
            "provider": {
                "url": "http://localhost:8082/api/v1/country",
                "value": "id",
                "label": "name"
            }
        },
        {
            "type": "select",
            "name": "state",
            "label": "State  ",
            "cssClass": "",
            "required": false,
            "provider": {
                "url": "http://localhost:8082/api/v1/state/20566",
                "value": "id",
                "label": "name",
                "params": [
                    {
                        "name": "countryId",
                        "value": "#country"
                    },
                    {
                        "name": "deleted",
                        "value": "0"
                    }
                ]
            }
        },
        {
            "type": "select",
            "name": "city",
            "label": "City",
            "cssClass": "",
            "required": false,
            "provider": {
                "url": "http://localhost:8082/api/v1/city/20600",
                "value": "id",
                "label": "name",
                "params": [
                    {
                        "name": "stateId",
                        "value": "#state"
                    },
                    {
                        "name": "deleted",
                        "value": "0"
                    }
                ]
            }
        },
        {
            "type": "checkbox",
            "name": "hobbies",
            "label": "Hobbies",
            "cssClass": "",
            "required": false,
            "provider": {
                "url": "https://mocki.io/v1/6e76eae7-a3b1-44cb-8e75-4526106568b7",
                "value": "id",
                "label": "name"
            }
        },
        {
            "type": "file",
            "name": "aadhaar",
            "label": "Aadhaar",
            "cssClass": "form-control",
            "accept": "image/png, image/jpeg"
        }
    ],
    "actions": [
        {
            "name": "save",
            "type": "button",
            "label": "Save",
            "cssClass": "btn btn-sm btn-primary mt-3 ms-2",
            "applyTo": "form",
            "handler": {
                "type": "javascript",
                "func": (event)=>test(event),
                "method": "post",
                "url": "http://localhost:8082/api/v1/user"
            }
        },
        {
            "name": "cancel",
            "type": "button",
            "label": "Cancel",
            "cssClass": "btn btn-sm btn-danger mt-3 ms-2",
            "applyTo": "form",
            "handler": {
                "type": "javascript", 
                "func": ()=>test()
            }
        },
        {
            "name": "add",
            "type": "button",
            "label": "Add Employee",
            "cssClass": "btn-danger",
            "applyTo": "list"
        }
    ],
    "dataProvider": {
        "collection": {
            "url": ""
        },
        "selector": {
            "url": ""
        }
    }
}

export default json;