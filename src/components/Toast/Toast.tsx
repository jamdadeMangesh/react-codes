import React, { useEffect, useState } from "react";
import "./Toast.scss";
export const Toast = (props: any) => {
    const {toastList, toastPosition} = props;
    const [list, setList] = useState(toastList);
    useEffect(() => {
        setList(toastList);
    },[toastList, list]);
    return (
        <>
            <div className={`toast-container ${toastPosition}`}>
                {list.map((toast: any, i: any) => 
                     <div className={`toast-inner toast-main ${toastPosition}`} key={i} style={{ backgroundColor: toast.backgroundColor }}>
                        <button>
                            &times;
                        </button>
                        <div className="toast-image">
                            <img src={toast.icon} alt="" />
                        </div>
                        <div>
                            <p className="toast-title">{toast.title}</p>
                            <p className="toast-message">{toast.description}</p>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}