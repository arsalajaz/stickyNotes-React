import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";

import {firebaseConfig} from "../firebaseAPIKey";


  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export {app, database};

/*
function writeUserData(userId, name, email, imageUrl) {
    set(ref(database, 'users/' + userId), {
      username: name,
      email: email,
      profile_picture : imageUrl
    });
}

const user = {
    userId: 2,
    name: "Arsal",
    email: "askldfj@gmail.com",
    imageUrl: "https://yoo.com"
}

//writeUserData(user.userId, user.name, user.email, user.imageUrl)

const usersReference = ref(database, 'users/2');
onValue(usersReference, (data) => {

  console.log(data.val())
});

*/