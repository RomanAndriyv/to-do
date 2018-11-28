import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

let config = {
    apiKey: "AIzaSyCE9GQaQWa2xBycx_lVT7TtXVXUaoJw9nI",
    authDomain: "to-do-3d46c.firebaseapp.com",
    databaseURL: "https://to-do-3d46c.firebaseio.com",
    projectId: "to-do-3d46c",
    storageBucket: "to-do-3d46c.appspot.com",
    messagingSenderId: "230725377785"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;