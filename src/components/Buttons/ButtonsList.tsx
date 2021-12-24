import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { PageHeader } from "../PageHeader/PageHeader";
import { Buttons } from "./Buttons";

export function ButtonsList(){
    const [getStatus, setStatus] = React.useState('');
    const updateStatus = (status: string) => {
        setStatus(status);
        setTimeout(() => {
            setStatus("");
        }, 3000);
    }
    const deleteStatus = () => {
        alert("Delete Status");
    }
    const textAreaRef = useRef(null);
    return(
        <>
            <PageHeader pageTitle="Buttons"></PageHeader>
            <h6 className="">Simple Buttons</h6>
            <Buttons
                buttonText="Update Status" 
                buttonColor="primary" 
                buttonSize="large"
                buttonClassName="update-button"
                onButtonClick={() => updateStatus("Status Updated")}
                
            ></Buttons>

            <Buttons 
                buttonText="Delete Status" 
                buttonColor="error" 
                buttonSize="large"
                buttonClassName="delete-button"
                onButtonClick={() => updateStatus("Status Deleted")}
            ></Buttons>

            <Buttons 
                buttonText="Disabled Status" 
                buttonColor="disabled" 
                buttonSize="large"
                buttonClassName="delete-button"
                isDisabled={true}
                onButtonClick={() => deleteStatus()}
            ></Buttons>
            <p>{getStatus}</p>

            <h6 className="mt-5">Buttons with Icons</h6>
            <Buttons
                buttonText="Home" 
                showIcon={true}
                buttonIcon="home"
                buttonColor="primary" 
                buttonSize="large"
                buttonClassName="update-button"
            ></Buttons>

            <Buttons 
                buttonText="Settings" 
                showIcon={true}
                buttonIcon="cog"
                buttonColor="error" 
                buttonSize="large"
                buttonClassName="delete-button"
            ></Buttons>

            <Buttons 
                buttonText="User" 
                showIcon={true}
                buttonIcon="user"
                buttonColor="disabled" 
                buttonSize="large"
                buttonClassName="delete-button"
            ></Buttons>

            
        </>
    )
}