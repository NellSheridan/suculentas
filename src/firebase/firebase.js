import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyByL1cV_dFtIAbGTRDmHnzRHN1Az7SsaFU",
    authDomain: "react-plants-9f259.firebaseapp.com",
    projectId: "react-plants-9f259",
    storageBucket: "react-plants-9f259.appspot.com",
    messagingSenderId: "268589550844",
    appId: "1:268589550844:web:c9d8478be7e0514868db79"
}

const app = firebase.initializeApp(firebaseConfig);

export function getFirebase() {
    return app;
}

export const database = firebase.firestore();