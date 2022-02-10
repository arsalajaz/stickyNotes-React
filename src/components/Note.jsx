import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';


function Note(props){
    return (
        <div className="Note">
            <h3>{props.title}</h3>
            <p>{props.content}</p>

            <button onClick={() => {
                props.onDelete(props.index);
            }}><DeleteIcon /></button>
        </div>
    )
}

export default Note;