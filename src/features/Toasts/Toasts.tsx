import React, { useEffect, useState } from "react";
import { PageHeader } from "../../components/PageHeader/PageHeader";
import { Toast } from "../../components/Toast/Toast";
import successIcon from "../../images/success.svg";
import errorIcon from "../../images/error.svg";
import warningIcon from "../../images/warning.svg";
import infoIcon from "../../images/info.svg";
import { Buttons } from "../../components/Buttons/Buttons";
import "./Toasts.scss";
export function ToastsList() {
	const [list, setList] = useState([] as any);
	const [position, setPosition] = useState("");
	const [dismissTime, setDismissTime] = useState(0);
	const BUTTON_PROPS = [
		{
			id: 1,
			type: "success",
			className: "success",
			label: "Success",
		},
		{
			id: 2,
			type: "danger",
			className: "danger",
			label: "Danger",
		},
		{
			id: 3,
			type: "info",
			className: "info",
			label: "Info",
		},
		{
			id: 4,
			type: "warning",
			className: "warning",
			label: "Warning",
		},
	];

	const showToast = (types: any) => {
		console.log("Types: " + types);
		let toastProperties = null;
		const id =  Math.floor((Math.random() * 100) + 1);

		switch(types) {
			case "success":
				toastProperties = {
					id,
					title: "Success",
					description: "This is a success toast component",
					backgroundColor: "#5cb85c",
					icon: successIcon,
				}
				break;
			case "danger":
				toastProperties = {
					id,
					title: "Danger",
					description: "This is an error toast component",
					backgroundColor: "#d9534f",
					icon: errorIcon,
				}
				break;
			case "info":
				toastProperties = {
					id,
					title: "Info",
					description: "This is an info toast component",
					backgroundColor: "#5bc0de",
					icon: infoIcon,
				}
				break;
			case "warning":
				toastProperties = {
					id,
					title: "Warning",
					description: "This is an warning toast component",
					backgroundColor: "#f0ad4e",
					icon: warningIcon,
				}
				break;
			default: 
				setList([]);
		}
		setList([...list, toastProperties]);
	};

	const selectPosition = (event: any) => {
		setPosition(event.target.value);
		setList([]);
	}
	const setDismissTimeout = (e: any) => {
		const dismissTime = parseInt(e.target.value, 10);
		setDismissTime(dismissTime);
	}
	return (
		<>
			<PageHeader pageTitle="Custom Toasts"></PageHeader>
			{BUTTON_PROPS.map((btn: any) => (
				<Buttons
					key={btn.id}
					buttonText={btn.label}
					buttonColor={btn.className}
					buttonSize="large"
					buttonClassName="update-button"
					isDisabled={(position == "") && (dismissTime > 0) ? true : false}
					onButtonClick={() => showToast(btn.type)}
				></Buttons>
			))}
			<div className="selectPosition mt-4">
				<p className="fs14 mb-10">Set Position : {position == "" ? "Please select position" : position}</p>
				<select name="position" value={position} onChange={selectPosition} className="position-dropdown">
					<option value="">Select Position</option>
					<option value="top-right">Top Right</option>
					<option value="top-left">Top Left</option>
					<option value="bottom-right">Bottom Right</option>
					<option value="bottom-left">Bottom Left</option>
				</select>
			</div>

			<div className="mt-4">
				<p className="fs14 mb-10">Set Timeout : {dismissTime == 0 ? "Please add dismiss timeout" : dismissTime}</p>
				<input className="timeout-input fs14" type="number" placeholder="Dismiss timeout in milliseconds" onChange={setDismissTimeout}/>
			</div>
			<Toast toastList={list} toastPosition={position} autoDelete={true} autoDeleteTimeout={dismissTime}></Toast>
		</>
	);
}
