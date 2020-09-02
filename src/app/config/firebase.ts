import firebase from 'firebase/app';
import 'firebase/firestore';
// The Firebase real time database is contained in this SDK
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBJ-P31haeKCACmNuPIiySHBXUb-7luU1c',
  authDomain: 'konstruktor-blog-task.firebaseapp.com',
  databaseURL: 'https://konstruktor-blog-task.firebaseio.com',
  projectId: 'konstruktor-blog-task',
  storageBucket: 'konstruktor-blog-task.appspot.com',
  messagingSenderId: '719050957038',
  appId: '1:719050957038:web:d3ff51a7c7ae7e6e6053ff',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
