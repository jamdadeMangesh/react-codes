import axios from "axios";
import React, { useEffect } from "react";
import { PageHeader } from "../../components/PageHeader/PageHeader";
import "./DataWithApi.scss";
import { Loader } from './../../components/Loader/Loader';

export function DataWithApi (){
    const [users, setUsers] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    async function getApi() {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users/")
        const data = response["data"];
        setUsers(data);
        if(data) {
            setLoading(false);
        }
        return data;
    }
    useEffect(() => {
        getApi()
    },[])
    
    return (
        <>  
            <PageHeader pageTitle="Data With API"></PageHeader>  
            {!loading ? 
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
            : <Loader></Loader> }
        </>
    )
}

//export default DataWithApi;