import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { PageHeader } from "../../../components/PageHeader/PageHeader";
import { Buttons } from "../../../components/Buttons/Buttons";


export function AddData() {
    const initUser = {firstName: "", lastName: "", email: "", designation: ""}
    const [formValue, setFormValue] = useState(initUser);
    
    const navigate = useNavigate();
    
    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormValue({...formValue, [name]: value});
    }
    const postData = () => {
        axios.post("https://61cd7c867067f600179c5ac9.mockapi.io/react-crud", formValue)
        .then(response => navigate("/post-api"));
    }
    
    return (
        <>
        <PageHeader pageTitle="Add Data"></PageHeader>
        <div className="mt-4 col-md-6 offset-md-3">
            <form>
                <pre>{JSON.stringify(formValue, undefined, 2)}</pre>
                <div className="row fs14">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">First Name</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                name="firstName"
                                value={formValue.firstName}
                                onChange={onInputChange}  
                                placeholder="Enter First Name" 
                            />
                            {/* <span>{formErrors.firstName}</span> */}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Last Name</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                name="lastName"
                                value={formValue.lastName}
                                onChange={onInputChange}  
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
                        name="email"
                        value={formValue.email}
                        onChange={onInputChange}
                    />
                    
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Designation</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="designation"
                        placeholder="Enter Designation" 
                        value={formValue.designation}
                        onChange={onInputChange}
                    />
                </div>
                <Buttons 
                    buttonText="Submit" 
                    buttonColor="primary" 
                    buttonSize="medium"
                    isDisabled={formValue.firstName && formValue.lastName && formValue.email && formValue.designation ? false : true}
                    buttonClassName="submit-button"
                    onButtonClick={() => postData()}
                ></Buttons>
                </form>
        </div>
        </>
    )
}