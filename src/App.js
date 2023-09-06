// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpSDiy-M-RXd3awCQcYM5LiMUUppLp6Ug",
  authDomain: "anal-93720.firebaseapp.com",
  projectId: "anal-93720",
  storageBucket: "anal-93720.appspot.com",
  messagingSenderId: "180820148544",
  appId: "1:180820148544:web:1768fe0750f78fb4e9baa5",
  measurementId: "G-M02H8QPGXJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <div className="App">
   
    </div>
  );
}

export default App;
