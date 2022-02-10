import React, { useState } from "react";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

function Input(props) {
    const [note, setNote] = useState({});
    const [boxOpened, setBoxOpened] = useState(false);

    function handleChange(event) {
        const newValue = event.target.value;
        const inputtype = event.target.name;

        setNote(prevValue => {
            return {
                ...prevValue,
                [inputtype]: newValue
            }
        });
    }

    function checkBox() {
        if(!boxOpened) {
            setBoxOpened(true);
        }
    }

    return (
        <div className="input">
            {boxOpened ? <div><input name="title" onChange={handleChange} id="title" placeholder="Title"></input><br /></div> : ""}
            
            <textarea onClick={checkBox} rows={boxOpened ? 5 : 1} name="content" onChange={handleChange} id="content" placeholder="Take a note..."></textarea>
            <br />
            { boxOpened ?
            <Fab onClick={() => {
                if(note.title !== "" || note.content !== "") props.onAdd(note);
            }}><AddIcon /></Fab> 
            : 
            ""
            }
        </div>
    );
}

export default Input;