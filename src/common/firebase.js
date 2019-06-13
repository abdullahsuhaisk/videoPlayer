import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  // apiKey: 'AIzaSyAoSjmk9s5WtMb4iZWOLlYBMJSa0EGXnEE',
  // authDomain: 'optimal-harbor-222608.firebaseapp.com',
  // databaseURL: 'https://optimal-harbor-222608.firebaseio.com',
  // projectId: 'optimal-harbor-222608',
  // storageBucket: 'optimal-harbor-222608.appspot.com',
  // messagingSenderId: '568608091903',
  apiKey: 'AIzaSyDGu4qq7yl2RMAOxTTxzYLa8w3tiAasEv8',
  authDomain: 'vibuy-consumer-staging.firebaseapp.com',
  databaseURL: 'https://vibuy-consumer-staging.firebaseio.com',
  projectId: 'vibuy-consumer-staging',
  storageBucket: 'vibuy-consumer-staging.appspot.com',
  messagingSenderId: '522097435637',
  appId: '1:522097435637:web:605e998777898c6c'
};
firebase.initializeApp(config);

export default firebase;
