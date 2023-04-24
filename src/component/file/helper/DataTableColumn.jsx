import React from 'react'
// import { useState } from "react"
export default function DataTableColumn(formJSON) {

    // ******************* Adding column   *********************
    let newColumn = [];
    formJSON.fields.map((item, index) => {
        item.fieldGroup.map((field, key) => {
            if (field.listtable) {
                let obj = {
                    name: field.name,
                    selector: field.id,
                    sortable: true
                }
                newColumn.push(obj)
            }
        })

    });

    // ***************** Adding Action into column  ***********************
    let cells = [];
    let tAction = [];
    formJSON.actions.map((action, index) => {
        if (action.applyto === "row") {
            let act = {
                name: action.name,
                label: action.label,
                icon: action.icon,
                class: action.classes
            }
            cells.push(act);
        } else if (action.applyto === "table") {
            let tableAction = {
                name: action.name,
                label: action.label,
                icon: action.icon,
                class: action.classes
            }
            tAction.push(tableAction);
        }
    });
    newColumn.push({ name: "Actions", cell: cells })
    const fetchedButtons = [];
    newColumn.map((item, index) => {
        if (item.name === "Actions" && item.cell.length !== 0) {
            fetchedButtons.push({
                "name": "Actions", cell: (row) => (<>
                    {console.log("//////////")}
                    {console.log(row)}
                    {item.cell.map((i) =>

                        <>
                            {/* <div className={i.class} >&nbsp; &nbsp;<i class={i.icon} aria-hidden="true"></i>&nbsp; {i.label}</div> */}
                            <button type='button' onClick={() => { console.log(row) }} className={i.classes} >{i.label}</button>
                        </>
                    )
                    }

                </>)
            })
        }
        else {
            fetchedButtons.push(item);
        }
    });
    return fetchedButtons;
}


