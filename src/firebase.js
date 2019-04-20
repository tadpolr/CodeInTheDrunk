import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBvHTT_5lH1YVFtaun3uALScW3-06V3lys',
  authDomain: 'code-in-the-drunk.firebaseapp.com',
  databaseURL: 'https://code-in-the-drunk.firebaseio.com',
  projectId: 'code-in-the-drunk',
  storageBucket: 'code-in-the-drunk.appspot.com',
  messagingSenderId: '575389870497',
};

export const fire = firebase.initializeApp(config);
export const db = fire.database();
