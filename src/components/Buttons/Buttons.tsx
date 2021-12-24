import React from "react";
import "./Buttons.scss";
export function Buttons(props : {
    onButtonClick?: () => void;
    buttonText: string;
    buttonColor: string;
    buttonClassName: string;
    buttonSize: string;
    isDisabled?: boolean;
    showIcon?: boolean;
    buttonIcon?: string;
}){
    const {
        onButtonClick, 
        buttonText, 
        buttonClassName, 
        isDisabled, 
        buttonColor, 
        showIcon, 
        buttonIcon,
        buttonSize
    } = props;
    return(
        <button 
            disabled={isDisabled} 
            className={`custom-button button-${buttonColor} button-${buttonSize} ${buttonClassName}`} 
            onClick={onButtonClick}
        >
            <div className="custom-button__title">
               {buttonText}
            </div>
            {showIcon && 
            <div className="custom-button__icon">
               <i className={`fa fa-${buttonIcon}`}></i>
            </div>}
        </button>
    )
}