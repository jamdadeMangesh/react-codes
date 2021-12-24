import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
  } from "react-router-dom";
import "./Navigation.scss";
export function Navigation (){
    return (
        <>
            <h5 className="mb-4">UI Component</h5>
            <div className="row">
                <div className="col-6 col-md-3">
                    <Link to ="/buttons">
                        <div className="navigation-card mb-4">
                            <div className="navigation-card__title">
                                Buttons
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-6 col-md-3">
                    <Link to ="/checkboxes">
                        <div className="navigation-card mb-4">
                            <div className="navigation-card__title">
                                Checkboxes
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-6 col-md-3">
                    <Link to ="/" className="disabled">
                        <div className="navigation-card mb-4">
                            <div className="navigation-card__title">
                                Radio Buttons
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-6 col-md-3">
                    <Link to ="/toasts">
                        <div className="navigation-card mb-4">
                            <div className="navigation-card__title">
                                Toast
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-6 col-md-3">
                    <Link to ="/" className="disabled">
                        <div className="navigation-card mb-4">
                            <div className="navigation-card__title">
                                Tooltips
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            
            <h5 className="mb-4 mt-4">Functional Component</h5>
            <div className="row">
                <div className="col-6 col-md-3">
                    <Link to ="/" className="disabled">
                        <div className="navigation-card mb-4">
                            <div className="navigation-card__title">
                                Data with JSON
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-6 col-md-3">
                    <Link to ="/data-with-api">
                    <div className="navigation-card mb-4">
                        <div className="navigation-card__title">
                            Data with API
                        </div>
                    </div>
                    </Link>
                </div>
                <div className="col-6 col-md-3">
                    <Link to ="/" className="disabled">
                        <div className="navigation-card mb-4">
                            <div className="navigation-card__title">
                                Routing
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-6 col-md-3">
                    <Link to ="/" className="disabled">
                        <div className="navigation-card mb-4">
                            <div className="navigation-card__title">
                                Redux
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-6 col-md-3">
                    <Link to ="/" className="disabled">
                        <div className="navigation-card mb-4">
                            <div className="navigation-card__title">
                                Pagination
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </> 
    )
}