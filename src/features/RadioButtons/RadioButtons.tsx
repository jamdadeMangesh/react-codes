import React, { useState } from "react";
import { PageHeader } from "../../components/PageHeader/PageHeader";
import { Radio } from "../../components/RadioButton/Radio";

export function RadioButtons(){
    const [radioValue, setRadioValue] = useState("All");
    const radioButtons = [
        {
            id: "1",
            name: "radioButton",
            key: "radio1",
            value:"All",
            label: "All",
            checked:true
        },
        {
            id: "2",
            name: "radioButton",
            key: "radio2",
            value:"Attempted",
            label: "Attempted",
            checked:false
        },
        {
            id: "3",
            name: "radioButton",
            key: "radio3",
            value:"Not Attempted",
            label: "Not Attempted",
            checked:false
        }
      ];

      const onRadioButtonChange = (e: any) => {
        setRadioValue(e.target.value);
      }
      
    return (
        <>
            <PageHeader pageTitle="Radio Buttons"></PageHeader>

            {radioButtons.map((item, index) => (
                <span key={index}>
                    <Radio 
                        key={index}
						changed={ onRadioButtonChange } 
						id={item.id}
						isSelected={ radioValue === item.value } 
                        value={item.value}
                        label={item.label}
					/>
                </span>
            ))}
            <p>Selected value : {radioValue}</p>
        </>
    )
}