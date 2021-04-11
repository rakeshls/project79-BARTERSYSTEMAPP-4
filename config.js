import firebase from 'firebase';
require('@firebase/firestore');

 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyC2pw6u4PbUUY6lDaThW1pLVxtgxJCtctI",
  authDomain: "project79-304ec.firebaseapp.com",
  projectId: "project79-304ec",
  storageBucket: "project79-304ec.appspot.com",
  messagingSenderId: "584424647083",
  appId: "1:584424647083:web:cfc697716a8cb499750aee"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.firestore();