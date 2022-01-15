import React from "react";
import "./ProgressiveWebApp.scss";
import indexImg from "../../images/index.png";
import manifestImg from "../../images/manifest.png";
import { PageHeader } from './../PageHeader/PageHeader';

export default function ProgressiveWebApp() {
    return (
        <>
            <PageHeader pageTitle="Progressive Web App"></PageHeader>
            <div className="progressive-wrapper">
                <h5>Steps to create Progressive Web App</h5>
                <hr />
                <div className="pwa-info">
                    <h6>1. Create new react app with PWA</h6>

                    <div>Without Typescript</div>
                    <code className="pwa-code mt-2">
                        <span>npx create-react-app my-app --template cra-template-pwa</span>
                    </code>

                    <div className="mt-2">With Typescript</div>
                    <code className="pwa-code mt-2">
                        <span>npx create-react-app my-app --template cra-template-pwa-typescript</span>
                    </code>
                </div>

                <div className="pwa-info mt-4">
                    <h6>2. Make change in index.tsx</h6>
                    <div>Inside src folder, on line no.18 change <strong>serviceWorkerRegistration.unregister();</strong> to <strong>serviceWorkerRegistration.register();</strong></div>
                    <img src={indexImg} alt="index file" className="d-block img-fluid mt-2" />
                </div>

                <div className="pwa-info mt-4">
                    <h6>2. Update manifest.json</h6>
                    <div>Inside public folder, update manifest.json.</div>
                    <img src={manifestImg} alt="index file" className="d-block img-fluid mt-2" />

                    <ul className="pwa-info mt-4">
                        <li><strong>short_name:</strong> The name of your application, used within the icon, like on the users’ home screens or launchers.</li>
                        <li><strong>name:</strong> The name of your app shown in the app stores or browsers on startup screens and prompts. If name property is not defined, short_name will be displayed.</li>
                        <li><strong>icons:</strong> The set of icons (or just one), used on the users’ home screens, launchers, task switchers, splash screens, etc.</li>
                        <li><strong>start_url:</strong> The URL of the page of your app that your users see on the startup.</li>
                        <li><strong>display:</strong> This property is responsible for the browser view. The app can hide the address bar, run in the new window, go fullscreen, etc. See the attributes you can use for it:
                            <ul>
                                <li><strong>fullscreen:</strong> This option is for opening the app without any browser UI, occupying the entirety of the users’ display.</li>
                                <li><strong>standalone:</strong> This option allows for running the app in the new window, like a native app. It will also hide the browser UI elements like an address bar.</li>
                                <li><strong>minimal-ui:</strong> This option is quite similar to the previous one, but it comes with the minimal set of browser UI, like back and reload buttons.</li>
                                <li><strong>browser:</strong> This option enables the usual browser experience.</li>
                            </ul>
                        </li>
                        <li><strong>theme_color:</strong> The color of the toolbar in your app.</li>
                        <li><strong>background_color:</strong> The color of the splash screen that appears when users click on the app icon in their home screens.​</li>

                    </ul>
                </div>

                <div className="pwa-info mt-4">
                    <h6>4. Add manifest.json inside index.html</h6>
                    <div>To make your web manifest file work, you need to add it to the pages of your web app, i.e inside <strong>public/index.html.</strong></div>
                </div>

                <div className="pwa-info mt-4">
                    <h6>5. Test your PWA</h6>
                    <div>To test PWA, we need to make it live on <strong>HTTPS Server.</strong></div>
                </div>

            </div>
        </>
    )
}