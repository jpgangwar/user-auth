
import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyCs9pozksICPX6tcnE576lOWsIBaQZk8V8",
    authDomain: "user-auth-a519f.firebaseapp.com",
    databaseURL: "https://user-auth-a519f.firebaseio.com",
    projectId: "user-auth-a519f",
    storageBucket: "user-auth-a519f.appspot.com",
    messagingSenderId: "475960268802",
    appId: "1:475960268802:web:805b9f1d58d9072fb8ef1b",
    measurementId: "G-3CRBHGPZVY"
  };
const fire =  firebase.initializeApp(firebaseConfig);
export default fire;