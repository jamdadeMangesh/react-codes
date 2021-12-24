import React from "react";
import { PageHeader } from "../../components/PageHeader/PageHeader";
import { Toast } from "../../components/Toast/Toast";
import successIcon from "../../images/success.svg";
import errorIcon from "../../images/error.png";
import warningIcon from "../../images/warning.png";
import infoIcon from "../../images/info.svg";
import { Buttons } from "../../components/Buttons/Buttons";
export function ToastsList(){
    const testList = [
        {
          id: 1,
          title: 'Success',
          description: 'This is a success toast component',
          backgroundColor: '#5cb85c',
          icon: successIcon
        },
        {
          id: 2,
          title: 'Danger',
          description: 'This is an error toast component',
          backgroundColor: '#d9534f',
          icon: errorIcon
        },
        {
            id: 2,
            title: 'Info',
            description: 'This is an info toast component',
            backgroundColor: '#5bc0de',
            icon: infoIcon
        },
        {
            id: 2,
            title: 'Warning',
            description: 'This is an warning toast component',
            backgroundColor: '#f0ad4e',
            icon: warningIcon
        }
    ];

    const BUTTON_PROPS = [
        {
          id: 1,
          type: 'success',
          className: 'success',
          label: 'Success'
        },
        {
          id: 2,
          type: 'danger',
          className: 'danger',
          label: 'Danger'
        },
        {
          id: 3,
          type: 'info',
          className: 'info',
          label: 'Info'
        },
        {
          id: 4,
          type: 'warning',
          className: 'warning',
          label: 'Warning'
        },
      ];

      const showToast = (types: any) => {
            console.log("Types: " +types);
      }
    return (
        <>
            <PageHeader pageTitle="Custom Toasts"></PageHeader>
            {BUTTON_PROPS.map((btn: any) => 
                <Buttons
                    key={btn.id}
                    buttonText={btn.label} 
                    buttonColor={btn.className} 
                    buttonSize="large"
                    buttonClassName="update-button"
                    onButtonClick={() => showToast(btn.type)}
                ></Buttons>
            )}
            <Toast 
                toastList={testList}
                toastPosition="bottom-right">
            </Toast>
        </>
    )
}