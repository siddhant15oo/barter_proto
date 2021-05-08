import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyCCA0914kI27FUmisoBPPDsfZAcbx5SDdM",
    authDomain: "barter-system-a6cd3.firebaseapp.com",
    databaseURL: "https://barter-system-a6cd3.firebaseio.com",
    projectId: "barter-system-a6cd3",
    storageBucket: "barter-system-a6cd3.appspot.com",
    messagingSenderId: "77232038284",
    appId: "1:77232038284:web:22015c8ffdc0156810f6a9"
  };



// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
