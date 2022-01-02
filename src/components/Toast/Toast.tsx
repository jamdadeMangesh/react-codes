import React, { useEffect, useState } from "react";
import "./Toast.scss";
export const Toast = (props: any) => {
	const { toastList, toastPosition, autoDelete, autoDeleteTimeout } = props;
	const [list, setList] = useState(toastList);
	useEffect(() => {
		setList(toastList);
		
	}, [toastList, list]);

	useEffect(() => {
		const interval =  setInterval(() => {
			if(autoDelete && toastList.length && list.length){
				deleteToast(toastList[0].id);
			}
		},autoDeleteTimeout);
		return () => {
			clearInterval(interval);
		}
	})

	const deleteToast = (id: any) => {
		const index = list.findIndex((e: any) => e.id === id);
		list.splice(index, 1);
		setList([...list]);
	}
	return (
		<>
			{toastPosition && toastPosition !== "" ? 
			<div className={`toast-container ${toastPosition}`}>
				{list.map((toast: any, i: any) => (
					<div
						className={`toast-inner toast-main ${toastPosition}`}
						key={i}
						style={{ backgroundColor: toast.backgroundColor }}
					>
						<button onClick={() => deleteToast(toast.id)}>&times;</button>
						<div className="toast-image">
							<img src={toast.icon} alt="" />
						</div>
						<div>
							<p className="toast-title">{toast.title}</p>
							<p className="toast-message">{toast.description}</p>
						</div>
					</div>
				))}
			</div>
			: "" }
		</>
	);
};
