import axios from "axios";
import React, { useEffect } from "react";
import { PageHeader } from "../../components/PageHeader/PageHeader";
//import "./DataWithApi.scss";
import { Loader } from './../../components/Loader/Loader';

export function DataWithJSON (){
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

    const dataWithJson = [
        {
            "id": 1,
            "email": "george.bluth@reqres.in",
            "first_name": "George",
            "last_name": "Bluth",
            "avatar": "https://reqres.in/img/faces/1-image.jpg"
        },
        {
            "id": 2,
            "email": "janet.weaver@reqres.in",
            "first_name": "Janet",
            "last_name": "Weaver",
            "avatar": "https://reqres.in/img/faces/2-image.jpg"
        },
        {
            "id": 3,
            "email": "emma.wong@reqres.in",
            "first_name": "Emma",
            "last_name": "Wong",
            "avatar": "https://reqres.in/img/faces/3-image.jpg"
        },
        {
            "id": 4,
            "email": "eve.holt@reqres.in",
            "first_name": "Eve",
            "last_name": "Holt",
            "avatar": "https://reqres.in/img/faces/4-image.jpg"
        },
        {
            "id": 5,
            "email": "charles.morris@reqres.in",
            "first_name": "Charles",
            "last_name": "Morris",
            "avatar": "https://reqres.in/img/faces/5-image.jpg"
        },
        {
            "id": 6,
            "email": "tracey.ramos@reqres.in",
            "first_name": "Tracey",
            "last_name": "Ramos",
            "avatar": "https://reqres.in/img/faces/6-image.jpg"
        }
    ];
    
    return (
        <>  
            <PageHeader pageTitle="Data With JSON"></PageHeader>  
            <table className="table table-bordered fs14 dataTable">
                <thead>
                    <tr>
                        
                        <th>Id</th>
                        <th>Avatar</th>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {!loading ? 
                        <>
                        {dataWithJson?.map((user: any) => {
                            return (
                                <>
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td><img src={user.avatar} alt={user.first_name}/></td>
                                        <td>{user.first_name}</td>
                                        <td>{user.last_name}</td>
                                        <td>{user.email}</td>
                                    </tr>
                                </>
                            )
                        })}
                        </>
                    : <Loader></Loader> }
                </tbody>
            </table>
        </>
    )
}

//export default DataWithApi;