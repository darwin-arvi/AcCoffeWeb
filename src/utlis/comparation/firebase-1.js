// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAOhJ-8AcHLzEzKB4Arm7vcNm5rvdzNhD8",
    authDomain: "coffe-fup.firebaseapp.com",
    projectId: "coffe-fup",
    storageBucket: "coffe-fup.appspot.com",
    messagingSenderId: "380729071237",
    appId: "1:380729071237:web:7c4f878e6f771cfb97fbec",
    measurementId: "G-N2G3SK9BHN"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export default db;
// export const storage = firebase.storage();
// const db = getFirestore(app);
// const plantingColl = collection(db, 'beaten');
// export default db;