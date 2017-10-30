import firebase from "firebase";

 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDIbetah-bYJbs8MFlNOkwUr5ahj_QXvQs",
    authDomain: "majestic-altar-184319.firebaseapp.com",
    databaseURL: "https://majestic-altar-184319.firebaseio.com",
    projectId: "majestic-altar-184319",
    //  storageBucket: "majestic-altar-184319.appspot.com",
    messagingSenderId: "1006542451503"
  };
  firebase.initializeApp(config);

export default firebase;