import React from "react";
import { Link } from "react-router-dom";
import "./PageHeader.scss";

export function PageHeader(props: {
    pageTitle:string;
}){
    const { pageTitle } = props;
    return (
        <div className="page-header mb-4">
            <div className="page-header__title">
                {pageTitle}
            </div>
            <div className="page-header__back">
                <Link to="/dashboard">Back</Link>
            </div>
        </div>
    )
}