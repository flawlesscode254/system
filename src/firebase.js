import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA4lWOJdcpL0j_Tb3caj1qtbEOpE6QB2Z8",
    authDomain: "school-system-87584.firebaseapp.com",
    projectId: "school-system-87584",
    storageBucket: "school-system-87584.appspot.com",
    messagingSenderId: "205667673847",
    appId: "1:205667673847:web:90594389f8a6e5500915f2",
    measurementId: "G-ZFWQCTMSR5"
};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
const auth = firebase.auth()

export default db
export { auth }