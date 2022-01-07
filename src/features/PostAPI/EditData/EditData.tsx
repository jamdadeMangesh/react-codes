import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Buttons } from "../../../components/Buttons/Buttons";
import { PageHeader } from "../../../components/PageHeader/PageHeader";

export function EditData() {
    const { id } = useParams();
    const [empInfo, setEmpInfo] = useState<any>([]);
    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState("");
    // const [email, setEmail] = useState("");
    // const [designation, setDesignation] = useState("");
    
    const getApiData = async() => {
        await axios.get(`https://61cd7c867067f600179c5ac9.mockapi.io/react-crud/${id}`)
            .then((response) => setEmpInfo(response.data))
    }
    getApiData();
    

    const navigate = useNavigate();
        const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const {name, value} = e.target;
            setEmpInfo({...empInfo, [name]: value});
        }
        const updateData = () => {
            axios.put(`https://61cd7c867067f600179c5ac9.mockapi.io/react-crud/${id}`, empInfo)
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
                                value={empInfo.firstName}
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
                                value={empInfo.lastName}
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
                        value={empInfo.email}
                        onChange={onInputChange}  
                    />
                    
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Designation</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Enter Designation" 
                        value={empInfo.designation}
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