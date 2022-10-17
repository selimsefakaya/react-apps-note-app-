import React, { useState, useEffect, useReducer } from "react";
import { Link } from "react-router-dom";
import "../styles/main.scss";

const notesReducer = (state, action) => {
  switch (action.type) {
    case "POPULATE_NOTES":
      return action.notes;
    case "ADD_NOTE":
      return [...state, { title: action.title, comment: action.comment }];
    case "DELETE_NOTE":
      return state.filter((note) => note.title !== action.title);
    default:
      return state;
  }
};

const NoteApp = () => {
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
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

  const addNote = (e) => {
    e.preventDefault();
    if (title) {
      dispatch({ type: "ADD_NOTE", title: title, comment: comment });
      setTitle("");
      setComment("");
    }
  };

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
          <form onSubmit={addNote}>
            <div className="form-group mb-3">
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="form-group mb-3">
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="form-control"
              />
            </div>
            <button className="btn btn-primary ">Add Note</button>
          </form>
        </div>
      </div>

      <div className="card mb-3">
        <div className="card-header">Notes</div>
        {notes && (
          <table className="table table-sm table-striped mb-0">
            <tbody>
              {notes.map((note) => (
                <tr key={note.title}>
                  <td className="p-3" style={{ width: "27%" }}>
                    {note.title}
                  </td>
                  <td className="pt-3 pb-3" style={{ width: "70%" }}>
                    {note.comment}
                  </td>
                  <td className="pt-3 pb-3" style={{ width: "3%" }}>
                    <button
                      onClick={() => deleteNote(note.title)}
                      className="btn btn-sm btn-danger"
                    >
                      X
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default NoteApp;
