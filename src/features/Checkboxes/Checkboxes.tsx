import React, { useState } from "react";
import { Checkbox } from "../../components/Checkbox/Checkbox";
import { PageHeader } from "../../components/PageHeader/PageHeader";

export function Checkboxes (){
    const checkboxes = [
        {
            id: "1",
            name: "check-box-1",
            key: "checkBox1",
            label: "Check Box 1"
        },
        {
            id: "2",
            name: "check-box-2",
            key: "checkBox2",
            label: "Check Box 2"
        }
      ];
    const [showValue, setShowValue] = useState("");
    const [checkboxValue, setCheckboxValue] = useState(new Array(checkboxes.length).fill(false));
    const handleOnChange = (position: any) => {
        console.log("position: " +position);
        const updatedCheckedState: any = checkboxValue.map((item, index) =>
          index === position ? !item : item
        );
        setCheckboxValue(updatedCheckedState);
        setShowValue(JSON.stringify(updatedCheckedState));
    }
    return (
        <>
            <PageHeader pageTitle="Checkboxes"></PageHeader>
            <h6 className="">Simple Checkboxes</h6>

            {checkboxes.map((item, index) =>(
                <>
                    <Checkbox
                    key={index}
                    checkboxLabel={item.label}
                    name={item.name}
                    id={item.id}
                    checked={checkboxValue[index]}
                    onCheckboxChange={() => handleOnChange(index)}
                ></Checkbox>
                </>
            ))}
            <p className="fs14">Selected checkbox value: {showValue}</p>
        
        </>
    )
}