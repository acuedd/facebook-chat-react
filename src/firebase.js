import firebase from "firebase";

var config = {
    apiKey: "AIzaSyBSVvBq82aEU6x3mH6SZ0aSqxec2dkRGDQ",
    authDomain: "react-chat-caf2a.firebaseapp.com",
    databaseURL: "https://react-chat-caf2a.firebaseio.com",
    projectId: "react-chat-caf2a",
    storageBucket: "",
    messagingSenderId: "1057078874804"
};

firebase.initializeApp(config);

export default firebase;