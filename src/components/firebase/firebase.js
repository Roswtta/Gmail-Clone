import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDPz-4JpMVwQV8qlI7Gcx4US4MQqlFgg-0",
    authDomain: "clone-yt-38443.firebaseapp.com",
    projectId: "clone-yt-38443",
    storageBucket: "clone-yt-38443.appspot.com",
    messagingSenderId: "669711953285",
    appId: "1:669711953285:web:b7c37f674551d12cd7a8ec"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider(); 

export { auth, db, provider };