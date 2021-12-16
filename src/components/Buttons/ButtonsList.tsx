import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Buttons } from "./Buttons";

export function ButtonsList(){
    const [openViewCodeModal, setOpenViewCodeModal] = React.useState(false);
    const [copySuccess, setCopySuccess] = React.useState('');
    const [getStatus, setStatus] = React.useState('');
    const updateStatus = (status: string) => {
        setStatus(status);
        setTimeout(() => {
            setStatus("");
        }, 3000);
    }
    const deleteStatus = () => {
        alert("Delete Status");
    }
    const textAreaRef = useRef(null);
    // function copyToClipboard(e: any) {
    //     if(textAreaRef && textAreaRef.current) {
    //         textAreaRef.current.focus();
    //     }
    //     document.execCommand('copy');
    //     // This is just personal preference.
    //     // I prefer to not show the whole text area selected.
    //     e.target.focus();
    //     setCopySuccess('Copied!');
    //   };
    return(
        <>
        {openViewCodeModal ? <div className="overlay"></div> : ""}
            <div className="page-header">
                <div className="page-header__back">
                    <Link to="/">Back</Link>
                </div>
                <div className="page-header__view">
                    <Buttons
                        buttonText="View Code" 
                        buttonColor="primary" 
                        buttonClassName="viewCode"
                        buttonSize="small"
                        onButtonClick={() => setOpenViewCodeModal(true)}
                    ></Buttons>
                </div>
            </div>
            <Buttons
                buttonText="Update Status" 
                buttonColor="primary" 
                buttonSize="large"
                buttonClassName="update-button"
                onButtonClick={() => updateStatus("Status Updated")}
            ></Buttons>

            <Buttons 
                buttonText="Delete Status" 
                buttonColor="error" 
                buttonSize="large"
                buttonClassName="delete-button"
                onButtonClick={() => updateStatus("Status Deleted")}
            ></Buttons>

            <Buttons 
                buttonText="Disabled Status" 
                buttonColor="disabled" 
                buttonSize="large"
                buttonClassName="delete-button"
                isDisabled={true}
                onButtonClick={() => deleteStatus()}
            ></Buttons>

            <p>{getStatus}</p>

            {/* <code>
                <pre>
                    &lt;Buttons <br />
                    buttonText="Delete Status" 
                    buttonColor="error" 
                    buttonClassName="delete-button"
                    isDisabled={true}
                    onButtonClick={() => deleteStatus()}
                    &gt;
                    &lt;/Buttons&gt;
                </pre>
            </code> */}
            
            <div className={`showCode-wrapper  ${openViewCodeModal ? "showCode-wrapper__slide" : ""}`}>
                <div className="showCode-wrapper__close" onClick={() => setOpenViewCodeModal(false)}>
                    Close
                </div>
                
                    <code className="showCode-wrapper__code">
                    {/* <button onClick={copyToClipboard}>Copy</button> 
                    {copySuccess} */}
                        <pre  className="showCode-wrapper__code-block mt-3" ref={textAreaRef}>
                            &lt;Buttons <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;buttonText="Update Status" <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;buttonColor="primary" <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;buttonClassName="update-button"<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;onButtonClick=&#123;() =&gt; updateStatus()&#125;&gt;<br />
                            
                            &lt;/Buttons&gt;
                        </pre>
                        <pre  className="showCode-wrapper__code-block">
                            &lt;Buttons <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;buttonText="Update Status" <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;buttonColor="primary" <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;buttonClassName="update-button"<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;onButtonClick=&#123;() =&gt; updateStatus()&#125;&gt;<br />
                            
                            &lt;/Buttons&gt;
                        </pre>
                        
                    </code>
                
            </div>
            
        </>
    )
}