import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAoSjmk9s5WtMb4iZWOLlYBMJSa0EGXnEE',
  authDomain: 'optimal-harbor-222608.firebaseapp.com',
  databaseURL: 'https://optimal-harbor-222608.firebaseio.com',
  projectId: 'optimal-harbor-222608',
  storageBucket: 'optimal-harbor-222608.appspot.com',
  messagingSenderId: '568608091903'
};
firebase.initializeApp(config);

export default firebase;
