function ingreso() {
    var email2 = document.getElementById('email2').value;
    var contrasena2 = document.getElementById('contrasena2').value;

    firebase.auth().signInWithEmailAndPassword(email2, contrasena2)
        .then(function () {
            /*verificar();*/
            console.log("Sesión iniciada");
            alert("Bienvenido");
            location.href = "admin_inicio.html";
            location.href = "/Sistema_Bonsai/admin_inicio.html";
        })
        .catch(function (error) {
            alert("Ingresa una cuenta como Administrador para Iniciar Sesión")
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
