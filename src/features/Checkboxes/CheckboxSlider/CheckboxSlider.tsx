import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Buttons } from "../../../components/Buttons/Buttons";
import { getAllCheckboxes, setCheckboxList } from "../CheckboxFilterSlice";
import "./CheckboxSlider.scss";

export default function CheckboxSlider(props: any) {
    const {onDismiss, checkboxArray} = props;
    const { selectedCheckboxList } = useSelector(getAllCheckboxes);
    const dispatch = useDispatch();
    
    const [theAllowedActivityType, setTheAllowedActivityType] = React.useState<Array<string>>(selectedCheckboxList);

    //get all selected checkbox values
    function checkActivityType(checkboxName?: string) {
        const theTempAllowedActivityType = Object.assign([], theAllowedActivityType);
        if (theTempAllowedActivityType.indexOf(checkboxName ?? " ") === -1) {
            theTempAllowedActivityType.push(checkboxName ?? " ");
        }
        else {
            theTempAllowedActivityType.splice(
                theTempAllowedActivityType.indexOf(checkboxName ?? " "),
                1
            );
        }
        setTheAllowedActivityType(theTempAllowedActivityType);
    }

    //on Apply button click store all values in redux
    const onSubmitCheckbox = () => {
        onDismiss();
        const payload: any = {selectedCheckboxList: theAllowedActivityType}
        dispatch(setCheckboxList(payload));
    }
    
    return (
        <div className="checkboxSlider">
            <div className="checkboxSlider-close cursorPointer" onClick={() => onDismiss()}><i className="fa fa-close"></i></div>
            <div className="checkboxSlider-filter">
            <div className="checkboxSlider-title">Filter with checkboxes</div>
                {checkboxArray.map((item: any, index: any) =>(
                    <div className="checkBoxDiv" key={index}>
                    <label htmlFor={item} className="Checkbox">
                        <input
                            id={item}
                            type="checkbox"
                            name={item}
                            value={index}
                            checked={theAllowedActivityType?.toString().includes(
                                item
                            )}
                            onChange={(e: any) => checkActivityType(
                                item
                            )}
                            className="checkboxInput"
                        />
                        <span className="checkboxLabel">{item}</span>
                    </label>
                    </div>
                ))}
            </div>
            <div className="checkboxSlider-button">
                <Buttons 
                    buttonText="Apply" 
                    buttonColor="primary" 
                    buttonSize="large"
                    buttonClassName="apply-button"
                    isDisabled={false}
                    onButtonClick={() => onSubmitCheckbox()}
                ></Buttons>
                <Buttons 
                    buttonText="Cancel" 
                    buttonColor="danger" 
                    buttonSize="large"
                    buttonClassName="apply-button"
                    isDisabled={false}
                    onButtonClick={() => onDismiss()}
                ></Buttons>
            </div>
        </div>
    )
}