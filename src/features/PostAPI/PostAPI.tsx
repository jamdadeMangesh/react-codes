import React from "react";
import { Buttons } from "../../components/Buttons/Buttons";
import { PageHeader } from "../../components/PageHeader/PageHeader";
import "./PostAPI.scss";
import { ShowData } from "./ShowData/ShowData";
import { useNavigate  } from "react-router-dom";

export function PostAPI() {
    const navigate = useNavigate();
    return (
        <>
            <PageHeader pageTitle="POST API"></PageHeader>

            <div className="row">
                <div className="col-md-12">
                    <Buttons 
                        buttonText="Add Data" 
                        buttonColor="primary" 
                        buttonSize="large"
                        buttonClassName="add-button"
                        onButtonClick={() => navigate("/post-api/add")}
                    ></Buttons>
                    <h6 className="mt-4">Show Data</h6>
                    <ShowData />
                </div>
            </div>
        </>
    )
}