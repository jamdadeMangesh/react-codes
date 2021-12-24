import React from "react";
import "./Checkbox.scss";

export function Checkbox(props: {
    checked: boolean;
    name: string;
    id?: string;
    checkboxLabel: string;
    onCheckboxChange?: () => void;
    isDisabled?:  boolean
}) {
    const {checked, name, id, checkboxLabel, onCheckboxChange, isDisabled} = props;
    return (
        <>
        <label htmlFor={id} className="Checkbox">
            <input
                id={id}
                type="checkbox"
                name={name}
                disabled={isDisabled}
                checked={checked}
                onChange={onCheckboxChange}
                className="checkboxInput"
                value={id}
            />
            <span className="checkboxLabel">{checkboxLabel}</span>
        </label>
    </>
    )
}