import React, { useEffect, useReducer } from "react";
import { Link } from "react-router-dom";
import notesReducer from "../reducers/notes";
import AddNoteForm from "./AddNoteForm";
import NoteList from "./NoteList";

const NoteApp = () => {
  // const [notes, setNotes] = useState([]);
  const [notes, dispatch] = useReducer(notesReducer, []);
  //dispatch yukarıdaki aksiyonlardan herhangi brisi, [] ise notes için gönderilen default değer.

  useEffect(() => {
    const notesStorage = JSON.parse(localStorage.getItem("notes"));
    if (notesStorage) {
      dispatch({ type: "POPULATE_NOTES", notes: notesStorage });
    }
  }, []);

  useEffect(() => {
    setTimeout(() => localStorage.setItem("notes", JSON.stringify(notes)), 100);
  }, [notes]);

  const deleteNote = (title) => {
    dispatch({ type: "DELETE_NOTE", title: title });
  };

  return (
    <div className="container p-5">
      <Link to="/">
        <h3
          style={{ position: "fixed", top: "3%", right: "90%", zIndex: "900" }}
        >
          Go Home
        </h3>
      </Link>

      <div className="card my-3">
        <div className="card-header">Add a New Note</div>
        <div className="card-body">
          <AddNoteForm dispatch={dispatch} />
        </div>
      </div>

      <div className="card mb-3">
        <div className="card-header">Notes</div>
        {notes && (
          <table className="table table-sm table-striped mb-0">
            <tbody>{<NoteList notes={notes} deleteNote={deleteNote} />}</tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default NoteApp;
