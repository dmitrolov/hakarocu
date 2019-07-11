import * as firebase from "firebase";

var provider = new firebase.auth.GoogleAuthProvider();
// provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
// firebase.auth().languageCode = 'pt';


provider.setCustomParameters({
    'login_hint': 'sk8ergirl1007@gmail.com'
});

import {googleSignOutBtn} from '../sign-out/googlesign-out'


function googleLogIn () {
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
    });

}



const googleSignInBtn = document.getElementById('google-sign-in');
// const googleSignOutBtn = document.getElementById('google-sign-out');

googleSignInBtn.addEventListener('click', () => {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // print_user(user);
            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            var providerData = user.providerData;

            alert(`Hello! ${displayName}`);
            googleSignOutBtn.classList.add('is-active');
            googleSignOutBtn.classList.remove('none-active');

        } else {
            googleLogIn();
            googleSignOutBtn.classList.add('none-active');
        }
    });
});


