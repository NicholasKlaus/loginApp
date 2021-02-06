import firebase from 'firebase';


var firebaseConfig = {
  apiKey: "AIzaSyCkfH5cVXkWeDnsRIzzQcKFb71gJgK6kSk",
  authDomain: "loginapp-a9c8f.firebaseapp.com",
  projectId: "loginapp-a9c8f",
  storageBucket: "loginapp-a9c8f.appspot.com",
  messagingSenderId: "539351952378",
  appId: "1:539351952378:web:27ffcade4990e9b9f89243"
};

export const fire = firebase.initializeApp(firebaseConfig);

