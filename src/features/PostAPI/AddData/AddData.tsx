import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Buttons } from "../../../components/Buttons/Buttons";
import { PageHeader } from "../../../components/PageHeader/PageHeader";

export function AddData() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [designation, setDesignation] = useState("");
    const navigate = useNavigate();
    const postData = () => {
        const empData = {
            firstName, lastName, email, designation
        }
        axios.post("https://61cd7c867067f600179c5ac9.mockapi.io/react-crud", empData)
        .then(response => resetForm())
        .then(response => navigate("/post-api"));
        
    }
    function resetForm(){
        setFirstName("");
        setLastName("");
        setEmail("");
        setDesignation("");
    }
    return (
        <>
        <PageHeader pageTitle="Add Data"></PageHeader>
        <div className="mt-4 col-md-6 offset-md-3">
            <form>
                <div className="row fs14">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">First Name</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}  
                                placeholder="Enter First Name" 
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Last Name</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)} 
                                placeholder="Enter Last Name" 
                            />
                        </div>
                    </div>
                </div>
                
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        placeholder="Enter email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Designation</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Enter Designation" 
                        value={designation}
                        onChange={(e) => setDesignation(e.target.value)}
                    />
                </div>
                <Buttons 
                    buttonText="Submit" 
                    buttonColor="primary" 
                    buttonSize="medium"
                    buttonClassName="submit-button"
                    onButtonClick={() => postData()}
                ></Buttons>
                </form>
        </div>
        </>
    )
}