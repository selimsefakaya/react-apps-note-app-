import React from "react";
import Note from "./Note";

const NoteList = ({ notes, deleteNote }) => {
    return notes.map((note) => (
        <Note note={note} key={note.title} deleteNote={deleteNote} />
    ));
};

export default NoteList;
