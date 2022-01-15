import React, { useEffect, useState } from "react";
import { Loader } from "../../components/Loader/Loader";
import { PageHeader } from "../../components/PageHeader/PageHeader";
import { Radio } from "../../components/RadioButton/Radio";
import { getAllProducts } from "./api";
import "./FilterWithApi.scss";
export function FilterWithApi() {
    const [getProducts, setProducts] = useState<any[]>([]);
    const [filteredResults, setFilteredResults] = React.useState<any[]>([]);
    const [radioValue, setRadioValue] = useState("");
    useEffect(() => {
        results();
    }, []);

    const results = async () => {
        const data = await getAllProducts();
        setProducts(data);
    };
    console.log("Radio Value :", radioValue);

    const theAllowedCategory: string[] = [];
    let uniqueAllowedCategory: string[] = [];
    if (getProducts) {
        for (let i = 0; i < getProducts.length; i++) {
            theAllowedCategory.push(getProducts[i].category);
        }
        uniqueAllowedCategory = Array.from(new Set(theAllowedCategory));
    }
    function onRadioButtonChange(e: any) {
        setRadioValue(e.target.value);
        getFilteredData();
    }

    const getFilteredData = () => {
        console.log("asdasd");
        const theFilteredCategory: string[] = [];
        for (let i = 0; i < getProducts.length; i++) {
            if (radioValue === getProducts[i].category) {
                theFilteredCategory.push(getProducts[i]);
            }
        }
        if (radioValue && radioValue !== "") {
            setFilteredResults(theFilteredCategory);
        } else {
            setFilteredResults(getProducts);
        }
        console.log("theFilteredCategory :", theFilteredCategory);
    }

    // const categoryResults = async () => {
    //     let dataByCategory: string[] = [];
    //     dataByCategory = await getMealByCategory(radioValue);
    //     console.log('dataByCategory :' ,dataByCategory);
    //     return dataByCategory;
    // };
    // categoryResults();
    // if(radioValue && radioValue != "") {
    //     getFilteredData();
    // }
    return (
        <>
            <PageHeader pageTitle="Filter Data With API"></PageHeader>
            <div>
                {uniqueAllowedCategory.map((item, index) => (
                    <span key={index}>
                        <Radio
                            key={index}
                            changed={onRadioButtonChange}
                            id={item}
                            isSelected={radioValue === item}
                            value={item}
                            label={item}
                        />
                    </span>
                ))}
            </div>
            <div className="row mt-4">
                {getProducts.length === 0 ? (
                    <Loader></Loader>
                ) : (
                    radioValue.length > 0 ? 
                    filteredResults.map((item: any, index: any) => {
                        return (
                            <div className="col-md-3 col-6" key={index}>
                                <div className="foodCard">
                                    <div className="foodCard-img">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="foodCard-info">
                                        <div className="foodCard-name">{item.title}</div>
                                        <div className="foodCard-area">
                                            <i className="fa fa-dollar"></i> {item.price}
                                        </div>
                                        <div className="foodCard-tags">
                                            <i className="fa fa-star"></i> {item.rating.rate}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    }) :  getProducts.map((item: any, index: any) => {
                        return (
                            <div className="col-md-3 col-6" key={index}>
                                <div className="foodCard">
                                    <div className="foodCard-img">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="foodCard-info">
                                        <div className="foodCard-name">{item.title}</div>
                                        <div className="foodCard-area">
                                            <i className="fa fa-dollar"></i> {item.price}
                                        </div>
                                        <div className="foodCard-tags">
                                            <i className="fa fa-star"></i> {item.rating.rate}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                )}
            </div>
        </>
    );
}
