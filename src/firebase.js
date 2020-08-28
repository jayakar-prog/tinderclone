import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyAG6PLfneJ1XByPrylac2y6jb2X535tygw",
    authDomain: "tinder-clone-c151a.firebaseapp.com",
    databaseURL: "https://tinder-clone-c151a.firebaseio.com",
    projectId: "tinder-clone-c151a",
    storageBucket: "tinder-clone-c151a.appspot.com",
    messagingSenderId: "613318666677",
    appId: "1:613318666677:web:21d3f35f6995a8a9b4d1fc",
    measurementId: "G-RGKXPP7WQZ"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const database=firebaseApp.firestore();

  export default database;