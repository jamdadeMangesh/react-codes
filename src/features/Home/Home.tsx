import React from "react";
import { useNavigate } from "react-router-dom";
import { Navigation } from "../Navigation/Navigation";
import "./Home.scss";

export function Home (){
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user')!);
    const handleLogout = () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("user");
        navigate("/");
    }
    return (
        <div className="home-wrapper">
            {user ? 
            <div className="userProfile">
                <span className="userProfile-name">{user.fname}</span>
                <span className="userProfile-logout" onClick={() => handleLogout()}>Logout</span>
                <img src={user.avatar} alt="user" className="userProfile-img"/>
            </div>
            : "" }
            <Navigation></Navigation>
        </div>
    )
}