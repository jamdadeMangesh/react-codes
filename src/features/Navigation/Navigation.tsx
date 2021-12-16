import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
  } from "react-router-dom";
import "./Navigation.scss";
export function Navigation (){
    return (
        <div className="row">
            <div className="col-md-3">
                <Link to ="/buttons">
                    <div className="navigation-card mb-4">
                        <div className="navigation-card__title">
                            Buttons
                        </div>
                    </div>
                </Link>
            </div>
            <div className="col-md-3">
                <Link to ="/buttons" className="disabled">
                    <div className="navigation-card mb-4">
                        <div className="navigation-card__title">
                            Checkboxes
                        </div>
                    </div>
                </Link>
            </div>
            <div className="col-md-3">
                <div className="navigation-card mb-4">
                    <div className="navigation-card__title">
                        Data with JSON
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <Link to ="/data-with-api">
                <div className="navigation-card mb-4">
                    <div className="navigation-card__title">
                        Data with API
                    </div>
                </div>
                </Link>
            </div>
            <div className="col-md-3">
                <div className="navigation-card mb-4">
                    <div className="navigation-card__title">
                        Routing
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="navigation-card mb-4">
                    <div className="navigation-card__title">
                        Redux
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="navigation-card mb-4">
                    <div className="navigation-card__title">
                        Pagination
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="navigation-card mb-4">
                    <div className="navigation-card__title">
                        Buttons
                    </div>
                </div>
            </div>
        </div>
        
    )
}