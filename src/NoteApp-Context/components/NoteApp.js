import React, { useEffect, useReducer } from "react";
import { Link } from "react-router-dom";
import notesReducer from "../reducers/notes";
import AddNoteForm from "./AddNoteForm";
import NoteList from "./NoteList";
import NotesContext from "../context/notes-context";

const NoteApp = () => {
  const [notes, dispatch] = useReducer(notesReducer, []);

  useEffect(() => {
    const notesStorage = JSON.parse(localStorage.getItem("notes"));
    if (notesStorage) {
      dispatch({ type: "POPULATE_NOTES", notes: notesStorage });
    }
  }, []);

  useEffect(() => {
    setTimeout(() => localStorage.setItem("notes", JSON.stringify(notes)), 100);
  }, [notes]);

  return (
    <NotesContext.Provider value={{ notes, dispatch }}>
      <Link to="/">
        <h3
          style={{ position: "fixed", top: "3%", right: "90%", zIndex: "900" }}
        >
          Go Home
        </h3>
      </Link>

      <div className="container p-5">
        <div className="card my-3">
          <div className="card-header">Add a New Note</div>
          <div className="card-body">
            <AddNoteForm />
          </div>
        </div>

        <div className="card mb-3">
          <div className="card-header">Notes</div>
          {notes && (
            <table className="table table-sm table-striped mb-0">
              <tbody>{<NoteList />}</tbody>
            </table>
          )}
        </div>
      </div>
    </NotesContext.Provider>
  );
};

export default NoteApp;
