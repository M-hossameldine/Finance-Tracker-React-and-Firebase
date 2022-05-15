import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCrMJqIW7SM6Y_TsK1OKGAaphykhXvixGo',
  authDomain: 'mymoney-assistant.firebaseapp.com',
  projectId: 'mymoney-assistant',
  storageBucket: 'mymoney-assistant.appspot.com',
  messagingSenderId: '979494599754',
  appId: '1:979494599754:web:e2408137622e3b3fdbbab3',
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp: function returns timestamp object that is compatible firestore
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
