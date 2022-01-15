import React from "react";
import "./Radio.scss";

export function Radio(props: { 
    id?: any; 
    changed?: any; 
    value: any; 
    isSelected?: any; 
    label: any; 
    name?: any; 
    checked?: any; 
    onRadioChange?: any; 
}) {
    return (
        <>
            <div className="RadioButton">
                <input id={props.id} onChange={props.changed} value={props.value} type="radio" checked={props.isSelected} />
                <label htmlFor={props.id}>{props.label}</label>
            </div>
        </>
    )
}