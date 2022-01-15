import React from "react";
import "./PageNotFound.scss";
import { Link } from 'react-router-dom';
import { Buttons } from './../Buttons/Buttons';

export default function PageNotFound(){
    return (
        <div className="pageNotFound-wrapper">
            <div className="pageNotFound-text">404</div>
            <div className="pageNotFound-subText">Page Not Found</div>
            <div className="pageNotFound-button">
                <Link to="/">
                    <Buttons
                        buttonText="Redirect to Home" 
                        showIcon={true}
                        buttonIcon="home"
                        buttonColor="primary" 
                        buttonSize="large"
                        buttonClassName="redirect-button"
                    ></Buttons>
                </Link>
            </div>
        </div> 
    )
}