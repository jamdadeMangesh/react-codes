import axios from "axios";
import React, { useEffect } from "react";
// import { useNavigate } from "react-router";
// import { useDispatch } from 'react-redux';
import "../PostAPI.scss";
//import { setEmpDetailsId } from "../PostSlice/PostSlice";

export function ShowData() {
    const [empInfo, setEmpInfo] = React.useState([]);
    // const navigate = useNavigate();
    // const dispatch = useDispatch();
    const getApiData = () => {
        axios.get("https://61cd7c867067f600179c5ac9.mockapi.io/react-crud/")
            .then((response) => setEmpInfo(response.data))
    }
    useEffect(() => {
        getApiData();
    }, [])
    // const redirectToEdit = (empDetailId: any) => {
    //     console.log("empDetailId :", empDetailId);
    //     dispatch(setEmpDetailsId(empDetailId));
    //     navigate("/post-api/add");
    // }
    const onDelete = (id: any) => {
        axios.delete(`https://61cd7c867067f600179c5ac9.mockapi.io/react-crud/${id}`).then(() => getApiData())

    }
    return (
        <>
            {empInfo.length > 0 ?
                <div className="table-wrapper-scroll-y my-custom-scrollbar text-center">
                    <table className="table table-bordered mt-4 table-striped mb-0">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Designation</th>
                                <th scope="col">Delete</th>
                                {/* <th scope="col">Update</th> */}
                            </tr>
                        </thead>
                        <tbody>

                            {empInfo.map((emp: any) => {
                                return (
                                    <tr key={emp.id}>
                                        <th scope="row">{emp.id}</th>
                                        <td>{emp.firstName} {emp.lastName}</td>
                                        <td>{emp.email}</td>
                                        <td>{emp.designation}</td>
                                        <td>
                                            <i className="fa fa-trash color-red" onClick={() => onDelete(emp.id)}></i>
                                        </td>
                                        {/* <td>
                                        <i className="fa fa-pencil color-blue" onClick={() => redirectToEdit(emp.id)}></i>
                                        </td> */}
                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>
                </div>
                : "No data"}
        </>
    )
}