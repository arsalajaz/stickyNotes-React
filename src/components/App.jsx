import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Input from "./Input"

function App() {
    
    const [stickyNotes, setStickyNotes] = useState(() => {
        const storageSavedNotes = localStorage.getItem("notes");
        return JSON.parse(storageSavedNotes);
    });

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(stickyNotes));
    });
    
    function addStickyNote(note) {
        const newNote = note;
       
        setStickyNotes(prevNotes => {
            return [...prevNotes, newNote];
        });
    }

    function deleteStickyNote(index) {
        const noteNo = index;
        setStickyNotes(stickyNotes.filter((note, i) => {
            return i !== noteNo;
        }));
    }

    return (
        <div>
            <Header></Header>
            <Input
                onAdd={addStickyNote}
            />
            {stickyNotes.map((currentNote, index) => {
                return (
                    <Note
                        key = {index}
                        index = {index}
                        title={currentNote.title}
                        content={currentNote.content}
                        onDelete={deleteStickyNote}
                    />
                )
            })}
            <Footer></Footer>
        </div>
    );
}

export default App;