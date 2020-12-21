
function registrar() {
    var email = document.getElementById('email').value;
    var contrasena = document.getElementById('contrasena').value;

    firebase.auth().createUserWithEmailAndPassword(email, contrasena)
        .then(function () {
            verificar();
            alert("Registrado correctamente");
            location.href = "/login/index.html";
        })
        .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
        });
}
function ingreso() {
    var email2 = document.getElementById('email2').value;
    var contrasena2 = document.getElementById('contrasena2').value;

    firebase.auth().signInWithEmailAndPassword(email2, contrasena2)
        .then(function () {
            /*verificar();*/
            console.log("Sesión iniciada");

            sessionStorage.setItem('sesion', 'True');
            var data = sessionStorage.getItem('sesion');
            console.log("Inicio de sesión: " + data);

            alert("Bienvenido");
            location.href = "/Sistema_Bonsai/foro.html";
        })
        .catch(function (error) {
            alert("Realiza tu registro para poder iniciar sesión")
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
        });
}
function observador() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            console.log("Existe usuario activo")
            aparece(user);
            var displayName = user.displayName;
            var email = user.email;
            console.log("************");
            console.log(user.emailVerified)
            console.log("************");
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            var providerData = user.providerData;
            // ...
        } else {
            contenido.innerHTML = `
            `;
        }
    });
}
observador();

function aparece(user) {
    var user = user;
    var contenido = document.getElementById('contenido');
    if (user.emailVerified) {
    }
}
function verificar() {
    var user = firebase.auth().currentUser;

    user.sendEmailVerification().then(function () {

    }).catch(function (error) {
        // An error happened.
    });
}