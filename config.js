import firebase from "firebase";
require("@firebase/firestore");

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4G-d7jhHE3hpRpoX1qpLi3iyDMHYCulI",
  authDomain: "e-library-d38a8.firebaseapp.com",
  projectId: "e-library-d38a8",
  storageBucket: "e-library-d38a8.appspot.com",
  messagingSenderId: "427052684084",
  appId: "1:427052684084:web:262a43b089316e5dd68b61"
};
  
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();