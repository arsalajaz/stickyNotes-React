import {app, database} from "./firebase"
import { ref, set, onValue } from "firebase/database";


function addNotetoDB(noteId, note) {
    set(ref(database, 'notes/' + noteId), {
        title: note.title,
        content: note.content,

    });
}

export default addNotetoDB;



//writeUserData(user.userId, user.name, user.email, user.imageUrl)
function readData() {
    const usersReference = ref(database, 'notes/');
    onValue(usersReference, (data) => {

    console.log(data.val())
    });
}

export {readData};
