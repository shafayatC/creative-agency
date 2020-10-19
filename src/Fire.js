import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAtqKLyZp3NPz-IxL4gZQJUtaL25E-VCRI",
    authDomain: "creative-agency-cfda0.firebaseapp.com",
    databaseURL: "https://creative-agency-cfda0.firebaseio.com",
    projectId: "creative-agency-cfda0",
    storageBucket: "creative-agency-cfda0.appspot.com",
    messagingSenderId: "851084394788",
    appId: "1:851084394788:web:75068b2bc5022fb44fb3b1",
    measurementId: "G-Z8KVVCDF0B"
  };

  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  export const provider = new firebase.auth.GoogleAuthProvider();
  export const fbProvider = new firebase.auth.FacebookAuthProvider();


export default fire;