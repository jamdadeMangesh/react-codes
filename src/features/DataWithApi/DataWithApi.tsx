import axios from "axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Buttons } from "../../components/Buttons/Buttons";
import "./DataWithApi.scss";

export function DataWithApi (){
    const [users, setUsers] = React.useState([]);
    async function getApi() {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users/")
        const data = response["data"];
        setUsers(data);
        return data;
    }
    useEffect(() => {
        getApi()
    },[])
    
    return (
        <>    
            <div className="page-header">
                <div className="page-header__back">
                    <Link to="/">Back</Link>
                </div>
                <div className="page-header__view">
                    <Buttons
                        buttonText="View Code" 
                        buttonColor="primary" 
                        buttonClassName="viewCode"
                        buttonSize="small"
                    ></Buttons>
                </div>
            </div>
            <div className="row">
            {users?.map((user: any) => {
                
                    return (
                        <div className="col-md-3 userCard" key={user.id}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <h5 className="card-title">{user.name}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">{user.email}</h6>
                                    <p className="card-text">{user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
                                    <a href="#" className="card-link">{user.website}</a>
                                </div>
                                </div>
                        </div>
                    )
             })}
            </div>
        </>
    )
}

//export default DataWithApi;