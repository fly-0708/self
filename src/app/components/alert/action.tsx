import {createRoot} from "react-dom/client";
import Message from "./index";


const message = {
    success: (text: string, time: number) => {
        const JSX = (
            <Message content={text} duration={time} type="success"></Message>
        );
        var dom: HTMLDivElement = document.createElement("div");
        createRoot(dom).render(JSX);
        document.body.appendChild(dom);
    },
    info: (text: string, time: number) => {
        const JSX = (
            <Message content={text} duration={time} type="info"></Message>
        );
        var dom: HTMLDivElement = document.createElement("div");
        createRoot(dom).render(JSX);
        document.body.appendChild(dom);
    },
    error: (text: string, time: number) => {
        const JSX = (
            <Message content={text} duration={time} type="error"></Message>
        );
        var dom: HTMLDivElement = document.createElement("div");
        createRoot(dom).render(JSX);
        document.body.appendChild(dom);
    },
    warning: (text: string, time: number) => {
        const JSX: JSX.Element = (
            <Message content={text} duration={time} type="warning"></Message>
        );
        var dom: HTMLDivElement = document.createElement("div");
        createRoot(dom).render(JSX);
        document.body.appendChild(dom);
    },
};

export default message;
