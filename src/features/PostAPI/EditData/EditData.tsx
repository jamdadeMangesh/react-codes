import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Buttons } from "../../../components/Buttons/Buttons";
import { PageHeader } from "../../../components/PageHeader/PageHeader";
import { getEmpDetailsId } from "../PostSlice/PostSlice";

export function EditData() {
    const  emp_id  = useSelector(getEmpDetailsId);
    const [empInfo, setEmpInfo] = useState<any>([]);
    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState("");
    // const [email, setEmail] = useState("");
    // const [designation, setDesignation] = useState("");
    
    const getApiData = async() => {
        await axios.get(`https://61cd7c867067f600179c5ac9.mockapi.io/react-crud/${emp_id}`)
            .then((response) => setEmpInfo(response.data))
    }
    getApiData();

    const empValue = {firstName: empInfo.firstName, lastName: empInfo.lastName, email: empInfo.email, designation: empInfo.designation}
    

    const navigate = useNavigate();
        const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const {name, value} = e.target;
            setEmpInfo({...empInfo, [name]: value});
        }
        const updateData = () => {
            axios.put(`https://61cd7c867067f600179c5ac9.mockapi.io/react-crud/${emp_id}`, empInfo)
            .then(response => setEmpInfo(empInfo))
            .then(response => navigate("/post-api"));
        }
        // function resetForm(){
        //     setFirstName("");
        //     setLastName("");
        //     setEmail("");
        //     setDesignation("");
        //     return true;
        // }
    
    return (
        <>
        <PageHeader pageTitle="Add Data"></PageHeader>
        <div className="mt-4 col-md-6 offset-md-3">
            <form>
                <pre>{JSON.stringify(empInfo, undefined, 2)}</pre>
                <div className="row fs14">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">First Name</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                value={empValue.firstName}
                                onChange={onInputChange}  
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
                                value={empValue.lastName}
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
                        value={empValue.email}
                        onChange={onInputChange}  
                    />
                    
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Designation</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Enter Designation" 
                        value={empValue.designation}
                        onChange={onInputChange}  
                    />
                </div>
                <Buttons 
                    buttonText="Submit" 
                    buttonColor="primary" 
                    buttonSize="medium"
                    isDisabled={empInfo.firstName && empInfo.lastName && empInfo.email && empInfo.designation ? false : true}
                    buttonClassName="submit-button"
                    onButtonClick={() => updateData()}
                ></Buttons>
                </form>
        </div>
        </>
    )
}