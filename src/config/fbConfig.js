import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'



// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCdcxfYi6grhZkSMuiamoOpoHi8axC56rs",
    authDomain: "proj-manage-app.firebaseapp.com",
    projectId: "proj-manage-app",
    storageBucket: "proj-manage-app.appspot.com",
    messagingSenderId: "63253322755",
    appId: "1:63253322755:web:2f0fab8282bac5cf2b4236"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSanpshots: true });


  export default firebase;