import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "../styles/main.scss";
import Index from "./Index";
import StateHookFunc from "./StateHookFunc";
import StateHookClass from "./StateHookClass";
import NoteApp from "../NoteApp-oneComp/NoteApp";
import NoteAppContext from "../NoteApp-Context/components/NoteApp";
import NoteAppNotContext from "../NoteApp-NotContext/components/NoteApp";
import NotFound from "./NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="state-hook" element={<StateHookFunc />} />
        <Route path="state-hook-class" element={<StateHookClass />} />
        <Route path="note-app" element={<NoteApp />} />
        <Route path="note-app-context" element={<NoteAppContext />} />
        <Route path="note-app-not-context" element={<NoteAppNotContext />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

const rootELement = document.getElementById("root");
const root = ReactDOM.createRoot(rootELement);
root.render(<NoteApp />);
