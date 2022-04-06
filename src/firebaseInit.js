import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
import firebaseConfig from '@/config.js';

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);