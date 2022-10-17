import React from "react";

const Note = ({ note, deleteNote }) => {
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
                    onClick={() => deleteNote(note.title)}
                    className="btn btn-sm btn-danger"
                >
                    X
                </button>
            </td>
        </tr>
    );
};

export default Note;
