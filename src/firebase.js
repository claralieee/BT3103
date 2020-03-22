import firebase from 'firebase';

const firebaseConfig = {
    //Key in your database details
    apiKey: "AIzaSyDEsosHLKl2Bk4jHyfqqgHdJANsIgA0fQE",
    authDomain: "countries-34d59.firebaseapp.com",
    databaseURL: "https://countries-34d59.firebaseio.com",
    projectId: "countries-34d59",
    storageBucket: "countries-34d59.appspot.com",
    messagingSenderId: "739031628911",
    appId: "1:739031628911:web:513d02e56889113d54a19a",
    measurementId: "G-2NRLKWL5QH"
  };
  
  firebase.initializeApp(firebaseConfig);
  var database = firebase.firestore();
  export default database;