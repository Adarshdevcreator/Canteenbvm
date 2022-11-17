function myFunction() {
    var email= document.getElementById("email").value;
    var password= document.getElementById("password").value;
    console.log(email);
    console.log(password);
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {

    // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
    });
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
             var email = user.email;
             console.log(email);
             window.open("https://www.youtube.com/")
      // ...
    } else {
      // User is signed out.
      // ...
    }
    });
}
