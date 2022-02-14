import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import "./Register.scss";

type LoginInfo = {
    userName: string;
    password: string;
}
export default function Register() {
    const { register, handleSubmit, formState: { errors } } = useForm<LoginInfo>();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const onSubmit = async (data: LoginInfo) => {
        setLoading(true);
        console.log("Data :", JSON.stringify(data));
        axios.post("https://fakerestapi.azurewebsites.net/api/v1/Users", data)
        .then(response => {
            setLoading(false);
            navigate("/")
        })
        // try {
        //     await fetch('https://www.mecallapi.com/api/login', {
        //         method: 'POST',
        //         body: JSON.stringify(data),
        //         headers: {
        //             "content-type": "application/json",
        //             "Origin":"http://localhost:3000"
        //         },
        //         mode:'cors'
        //     })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data)
        //         if("accessToken" in data){
        //             setLoading(false);
        //             console.log("accessToken", data.accessToken);
        //             localStorage.setItem('accessToken', data['accessToken']);
        //             localStorage.setItem('user', JSON.stringify(data['user']));
        //             navigate("/dashboard");
        //         }else {
        //             console.log("error")
        //         }
        //     })
        //     .catch(error => console.log('Authorization failed: ' + error.message));
        // }
        // catch (e) {
        //     console.log(e)
        // }
    }
    return (
        <>
            <div className="login-bg">
                <div className="login-card">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group mt-4">
                            <label>Email</label>
                            <input
                                placeholder="Enter Email"
                                type="email"
                                autoComplete="off"
                                className={`form-control customForm-control ${errors.userName ? "errorBorder" : ""}`}
                                {...register("userName", { required: true, pattern: /\S+@\S+\.\S+/ })}
                            // onChange={onInputChange}  
                            />
                            {errors.userName ?
                                <div className="errorMessage">
                                    {errors.userName?.type === 'required' && "Email ID is required"}
                                    {errors.userName?.type === 'pattern' && "Email ID is invalid"}
                                </div> : ""}
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input
                                placeholder="Enter Password"
                                type="password"
                                autoComplete="off"
                                className={`form-control customForm-control ${errors.password ? "errorBorder" : ""}`}
                                {...register("password", { required: true, minLength: 6 })}
                            // onChange={onInputChange}  
                            />
                            {errors.password ?
                                <div className="errorMessage">
                                    {errors.password?.type === 'required' && "Password is required"}
                                    {errors.password?.type === 'minLength' && "Password must be greater than 6 characters"}
                                </div> : ""}
                        </div>


                        <div className="form-group mt-4">
                            <div className="d-flex align-items-center justify-content-between">
                                <button className={`btn btn-primary ${loading ? "disabled" : ""}`} type="submit" >
                                    {loading ? <i className="fa fa-spinner fa-spin" ></i> : ""} Register
                                </button>
                                <div>
                                    Already have an account? <Link to="/">Sign In</Link>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}