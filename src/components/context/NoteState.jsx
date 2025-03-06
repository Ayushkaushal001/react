import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const [note, setNote] = useState({ name: "Ayush" });

    const updateNote = (newName) => {
        setNote({ name: newName });
    };

    return (
        <NoteContext.Provider value={{ note, updateNote }}>
            {props.children}
        </NoteContext.Provider>
    );
};

export default NoteState;
