import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
    return (
        <div>
            <Header></Header>
            {notes.map((currentNote) => {
                return (
                    <Note
                        key = {currentNote.key}
                        title={currentNote.title}
                        content={currentNote.content}
                    />
                )
            })}
            <Footer></Footer>
        </div>
    );
}

export default App;