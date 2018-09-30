// src/firebase.js
import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyCM-aRYjdPXh-v1wWt3A7fEpDWo6k3joS4",
    authDomain: "fun-food-friends-ab65e.firebaseapp.com",
    databaseURL: "https://fun-food-friends-ab65e.firebaseio.com",
    projectId: "fun-food-friends-ab65e",
    storageBucket: "",
    messagingSenderId: "548584486362"
};
firebase.initializeApp(config);
export default firebase;