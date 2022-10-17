import React, { useContext } from "react";
import NotesContext from "../context/notes-context";

const Note = ({ note }) => {
    const { dispatch } = useContext(NotesContext);
    return (
        <tr>
            <td className="p-3" style={{ width: "30%" }}>
                {note.title}
            </td>
            <td className="pt-3 pb-3" style={{ width: "66" }}>
                {note.comment}
            </td>
            <td className="pt-3 pb-3" style={{ width: "4%" }}>
                <button
                    onClick={() => dispatch({ type: "DELETE_NOTE", title: note.title })}
                    className="btn btn-sm btn-danger"
                >
                    X
                </button>
            </td>
        </tr>
    );
};

export default Note;
