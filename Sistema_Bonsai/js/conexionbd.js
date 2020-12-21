var pregunta = document.getElementById('pregunta');
var enviarData = document.getElementById('btnEnviar');

window.onload = function () {
    var valor = sessionStorage.getItem("sesion");
    if (valor != "True") {
        document.getElementById("question").style.display = "none";
    }
};

var dataBD = firebase.database().ref('preguntasF').push();
enviarData.addEventListener('click', preguntasF);
function preguntasF() {
    dataBD.set({
        pregunta: pregunta.value,
        clave: dataBD.getKey(),
        Respuesta: ""
    })
    alert("Públicado correctamente");
    location.href = "/Sistema_Bonsai/foro.html";
}

var config = {

        apiKey: "AIzaSyDOEyKjTqawZ2nxnvXGNN1KLhQYJP9eOh8",
        authDomain: "bdbonsai-55379.firebaseapp.com",
        databaseURL: "https://bdbonsai-55379-default-rtdb.firebaseio.com",
        projectId: "bdbonsai-55379",
        storageBucket: "bdbonsai-55379.appspot.com",
        messagingSenderId: "1055742813594",
        appId: "1:1055742813594:web:4e23c55027cf7a0b7f0623"

};

var database = firebase.database();

var referencia = database.ref("preguntasF");

var preguntasF = {};
var arr = [];
var visualizarP = "";

firebase.database().ref("preguntasF").once('value').then(function (snapshot) {
    var data = snapshot.val();
    for (var k in data) {
        visualizarP += '<tr >';
        visualizarP += '<td >';
        visualizarP += data[k].pregunta + '<td></tr>';

        if (data[k].Respuesta != "") {
            visualizarP += '<tr>';
            visualizarP += '<td> Respuesta: ';
            visualizarP += data[k].Respuesta + '</td> </tr>';
        }
    }
    var table = document.getElementById("tabla").innerHTML = visualizarP;
});
function setClave(clave) {
    console.log(clave);
    document.getElementById("clave").value = clave;
}

function guardarRespuesta() {
    var clave = document.getElementById("clave").value;
    var respuesta = document.getElementById("respuesta").value;
    referencia.child(clave).update({
        Respuesta: respuesta
    });
    alert("Publicado correctamente");
    location.href = "/administrador/foroPreg.html";
}