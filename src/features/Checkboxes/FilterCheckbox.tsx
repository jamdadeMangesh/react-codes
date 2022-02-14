import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Loader } from "../../components/Loader/Loader";
import { PageHeader } from "../../components/PageHeader/PageHeader";
import { getAllProducts } from "../FilterWithApi/api";
import "../FilterWithApi/FilterWithApi";
import { getAllCheckboxes } from "./CheckboxFilterSlice";
import CheckboxSlider from "./CheckboxSlider/CheckboxSlider";
import "./FilterCheckbox.scss";
export function FilterCheckbox() {
    const [getProducts, setProducts] = useState<any[]>([]);
    const [filteredResults, setFilteredResults] = React.useState<any[]>([]);
    const [openCheckboxSlider, setOpenCheckboxSlider] = useState(false);

    //get stored value from redux. check CheckboxSlider.tsx page.
    const { selectedCheckboxList } = useSelector(getAllCheckboxes);
    useEffect(() => {
        //check if filter checkbox array has value and is not undefined
        if(selectedCheckboxList && selectedCheckboxList.length > 0) {
            if(selectedCheckboxList) {
                let filteredArray1 = getProducts.filter(el => selectedCheckboxList?.includes(el.category));
                setFilteredResults(filteredArray1);
            }
        } else {
            results();
        }
    }, [selectedCheckboxList, getProducts]);


    //API call to get all products
    const results = async () => {
        const data = await getAllProducts();
        setProducts(data);
    };
    
    //get all category from api data to show in checkbox slider
    const theAllowedCategory: string[] = [];
    let uniqueAllowedCategory: string[] = [];
    if (getProducts) {
        for (let i = 0; i < getProducts.length; i++) {
            theAllowedCategory.push(getProducts[i].category);
        }
        uniqueAllowedCategory = Array.from(new Set(theAllowedCategory));
    }

    return (
        <>
            <PageHeader pageTitle="Filter Data With API"></PageHeader>
            <div className="cursorPointer" onClick={() => setOpenCheckboxSlider(true)}><i className="fa fa-filter"></i> Filter</div>
            {openCheckboxSlider ? <div className="filterOverlay"></div>: ""}
            <div className="row mt-4">
                {getProducts.length === 0 ? (
                    <Loader></Loader>
                ) : (
                    filteredResults.length > 0 ? 
                    filteredResults.map((item: any, index: any) => {
                        return (
                            <div className="col-md-3" key={index}>
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
                            <div className="col-md-3" key={index}>
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
            {openCheckboxSlider && <CheckboxSlider onDismiss={() => setOpenCheckboxSlider(false)}  checkboxArray={uniqueAllowedCategory}/>}
        </>
    );
}
