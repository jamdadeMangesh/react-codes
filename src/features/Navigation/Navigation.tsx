import React from "react";
import {
    Link,
  } from "react-router-dom";
import "./Navigation.scss";
export function Navigation (){
    return (
        <div className="navigation-wrapper">
            <h5 className="mb-4">UI Component</h5>
            <div className="row">
                <div className="col-6 col-md-3">
                    <Link to ="/buttons">
                        <div className="navigation-card mb-4">
                            <div className="navigation-card__count">
                                1
                            </div>
                            <div className="navigation-card__title">
                                Buttons
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-6 col-md-3">
                    <Link to ="/checkboxes">
                        <div className="navigation-card mb-4">
                            <div className="navigation-card__count">
                                2
                            </div>
                            <div className="navigation-card__title">
                                Checkboxes
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-6 col-md-3">
                    <Link to ="/radio">
                        <div className="navigation-card mb-4">
                            <div className="navigation-card__count">
                                3
                            </div>
                            <div className="navigation-card__title">
                                Radio Buttons
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-6 col-md-3">
                    <Link to ="/toasts">
                        <div className="navigation-card mb-4">
                            <div className="navigation-card__count">
                                4
                            </div>
                            <div className="navigation-card__title">
                                Toast
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-6 col-md-3">
                    <Link to ="/" className="disabled">
                        <div className="navigation-card mb-4">
                            <div className="navigation-card__count">
                                5
                            </div>
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
                    <Link to ="/data-with-json" >
                        <div className="navigation-card mb-4">
                            <div className="navigation-card__count">
                                1
                            </div>
                            <div className="navigation-card__title">
                                Data with JSON
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-6 col-md-3">
                    <Link to ="/data-with-api">
                    <div className="navigation-card mb-4">
                        <div className="navigation-card__count">
                                2
                            </div>
                        <div className="navigation-card__title">
                            Data with API
                        </div>
                    </div>
                    </Link>
                </div>
                <div className="col-6 col-md-3">
                    <Link to ="/pagination">
                        <div className="navigation-card mb-4">
                            <div className="navigation-card__count">
                                3
                            </div>
                            <div className="navigation-card__title">
                                Pagination
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-6 col-md-3">
                    <Link to ="/redux">
                        <div className="navigation-card mb-4">
                            <div className="navigation-card__count">
                                4
                            </div>
                            <div className="navigation-card__title">
                                Redux
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-6 col-md-3">
                    <Link to ="/post-api">
                        <div className="navigation-card mb-4">
                            <div className="navigation-card__count">
                                5
                            </div>
                            <div className="navigation-card__title">
                                POST API
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-6 col-md-3">
                    <Link to ="/filter-data-with-api">
                        <div className="navigation-card mb-4">
                            <div className="navigation-card__count">
                                6
                            </div>
                            <div className="navigation-card__title">
                                Filter Data with API
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-6 col-md-3">
                    <Link to ="/react-hooks-form">
                        <div className="navigation-card mb-4">
                            <div className="navigation-card__count">
                                7
                            </div>
                            <div className="navigation-card__title">
                                React Hooks Form
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-6 col-md-3">
                    <Link to ="/filter-with-checkboxes">
                        <div className="navigation-card mb-4">
                            <div className="navigation-card__count">
                                8
                            </div>
                            <div className="navigation-card__title">
                                Filter With Checkboxes
                            </div>
                        </div>
                    </Link>
                </div>
            </div>

            <h5 className="mb-4 mt-4">Other</h5>
            <div className="row">
                <div className="col-6 col-md-3">
                    <Link to ="/progressive-web-app" >
                        <div className="navigation-card mb-4">
                            <div className="navigation-card__count">
                                1
                            </div>
                            <div className="navigation-card__title">
                                Progressive Web App
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div> 
    )
}