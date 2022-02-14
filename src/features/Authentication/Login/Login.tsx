import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import "./Login.scss";

type LoginInfo = {
    username: string;
    password: string;
}
export default function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm<LoginInfo>();
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();
    const onSubmit = async (data: LoginInfo) => {
        setLoading(true);
        try {
            await fetch('https://www.mecallapi.com/api/login', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    "content-type": "application/json",
                    "Origin":"http://localhost:3000"
                },
                mode:'cors'
            })
            .then(res => res.json())
            .then(data => {
                if("accessToken" in data){
                    setLoading(false);
                    localStorage.setItem('accessToken', data['accessToken']);
                    localStorage.setItem('user', JSON.stringify(data['user']));
                    navigate("/dashboard");
                }else {
                    setLoading(false);
                    setErrorMessage(data['message']);
                    
                }
            })
            .catch(error => console.log('Authorization failed: ' + error.message));
        }
        catch (e) {
            console.log(e)
        }
    }
    
    return (
        <>
            <div className="login-bg">
                <div className="login-card">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* <span>"username": "karn.yong@mecallapi.com",<br /> "password": "mecallapi"</span> */}
                        {errorMessage && <div className="mt-4 text-danger">{errorMessage}</div>}
                        <div className="form-group">
                            <label>Email</label>
                            <input
                                placeholder="Enter Email"
                                type="email"
                                value="karn.yong@mecallapi.com"
                                autoComplete="off"
                                className={`form-control customForm-control ${errors.username ? "errorBorder" : ""}`}
                                {...register("username", { required: true, pattern: /\S+@\S+\.\S+/ })}
                            // onChange={onInputChange}  
                            />
                            {errors.username ?
                                <div className="errorMessage">
                                    {errors.username?.type === 'required' && "Email ID is required"}
                                    {errors.username?.type === 'pattern' && "Email ID is invalid"}
                                </div> : ""}
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input
                                placeholder="Enter Password"
                                type="password"
                                value="mecallapi"
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
                                    {loading ? <i className="fa fa-spinner fa-spin" ></i> : ""} Login
                                </button>
                                <div>
                                    Don't have an account? <Link to="/register">Sign Up</Link>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}