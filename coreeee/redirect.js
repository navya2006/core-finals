firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser){
    } else{
        window.location.replace('login.html');
    }
})