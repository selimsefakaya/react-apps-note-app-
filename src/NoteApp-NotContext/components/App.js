import React from "react";
import { createRoot } from "react-dom/client";
import NoteApp from "./NoteApp";
import "../styles/main.scss";

const App = () => {
    return (
        <>
            <NoteApp />
        </>
    );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
