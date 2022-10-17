import React, { useState } from "react";

const AddNoteForm = ({ dispatch }) => {
    const [title, setTitle] = useState("");
    const [comment, setComment] = useState("");

    const addNote = (e) => {
        e.preventDefault();
        if (title) {
            dispatch({ type: "ADD_NOTE", title: title, comment: comment });
            setTitle("");
            setComment("");
        }
    };

    return (
        <div>
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
    );
};

export default AddNoteForm;
