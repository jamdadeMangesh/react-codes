import React from "react";
import { Navigation } from "../Navigation/Navigation";
import "./Home.scss";

export function Home (){
    return (
        <div className="home-wrapper">
            <div className="home-wrapper__title mb-4">
                Home Component
            </div>
            <Navigation></Navigation>
        </div>
    )
}