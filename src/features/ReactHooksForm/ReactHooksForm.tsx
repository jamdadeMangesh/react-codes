import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { PageHeader } from "../../components/PageHeader/PageHeader";
import "./ReactHooksForm.scss";
type UserInfo = {
    Username: string;
    mobileNumber: number;
    email: string;
    gender: string;
    dateOfBirth: string;
    about: string;
    subscribe: boolean;

}
export default function ReactHooksForm() {
    const { register, handleSubmit, formState: { errors } } = useForm<UserInfo>();
    const [getData, setData] = useState<any>([]);
    const onSubmit = (data: UserInfo) => {
        setData(data);
    }
    // const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const {name, value} = e.target;
    //     setData({...getData, [name]: value});
    // }
    return (
        <>
            <PageHeader pageTitle="React Hooks Form"></PageHeader>
            {/* {getData.Username} */}
            <div className="row">
                <div className="mt-4 col-md-8">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input
                                        placeholder="UserName"
                                        className={`form-control customForm-control ${errors.Username ? "errorBorder" : ""}`}
                                        {...register("Username", { required: true, maxLength: 20 })}
                                    // onChange={onInputChange}  
                                    />
                                    {errors.Username ?
                                        <div className="errorMessage">
                                            {errors.Username?.type === 'required' && "User name is required"}
                                            {errors.Username?.type === "maxLength" && "Username must be less than 20 characters"}
                                        </div> : ""}
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input
                                        placeholder="Email"
                                        type="email"
                                        autoComplete="off"
                                        className={`form-control customForm-control ${errors.email ? "errorBorder" : ""}`}
                                        {...register("email", { required: true, pattern: /\S+@\S+\.\S+/ })}
                                    // onChange={onInputChange}  
                                    />
                                    {errors.email ?
                                        <div className="errorMessage">
                                            {errors.email?.type === 'required' && "Email ID is required"}
                                            {errors.email?.type === 'pattern' && "Email ID is invalid"}
                                        </div> : ""}
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input
                                        placeholder="Mobile number"
                                        type="tel"
                                        autoComplete="off"
                                        className={`form-control customForm-control ${errors.mobileNumber ? "errorBorder" : ""}`}
                                        {...register("mobileNumber", { required: true, minLength: 10, maxLength: 10 })}
                                    // onChange={onInputChange}  
                                    />
                                    {errors.mobileNumber ?
                                        <div className="errorMessage">
                                            {errors.mobileNumber?.type === 'required' && "Mobile number is required"}
                                            {errors.mobileNumber?.type === 'maxLength' && "Mobile number must be 10 digit"}
                                            {errors.mobileNumber?.type === 'minLength' && "Mobile number must be 10 digit"}
                                        </div> : ""}
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input
                                        placeholder="Date of birth"
                                        type="date"
                                        className={`form-control customForm-control ${errors.dateOfBirth ? "errorBorder" : ""}`}
                                        {...register("dateOfBirth", { required: true })}
                                    // onChange={onInputChange}  
                                    />
                                    {errors.dateOfBirth ?
                                        <div className="errorMessage">
                                            {errors.dateOfBirth?.type === 'required' && "Date of birth is required"}
                                        </div> : ""}
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>Gender</label>
                                    <br />
                                    <div className="form-check form-check-inline">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            value="Male"
                                            id="inlineRadio1"
                                            {...register("gender", { required: true })}
                                        // onChange={onInputChange}  
                                        />
                                        <label className="form-check-label" htmlFor="inlineRadio1">
                                            Male
                                        </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            value="Female"
                                            id="inlineRadio2"
                                            {...register("gender", { required: true })}
                                        //  onChange={onInputChange}  
                                        />
                                        <label className="form-check-label" htmlFor="inlineRadio2">
                                            Female
                                        </label>
                                    </div>
                                    {errors.gender ?
                                    <div className="errorMessage">
                                        {errors.gender?.type === 'required' && "Gender is required"}
                                    </div> : ""}
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <textarea
                                        placeholder="About"
                                        className={`form-control customForm-control ${errors.about ? "errorBorder" : ""}`}
                                        {...register("about")}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <input className="btn btn-primary" type="submit" />
                        </div>
                    </form>
                </div>
                <div className="col-md-4 mt-4">
                <pre>{getData ? JSON.stringify(getData, undefined, 2) : ""}</pre>
                </div>
            </div>
        </>
    )
}