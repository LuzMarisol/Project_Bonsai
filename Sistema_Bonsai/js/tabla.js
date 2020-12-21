
var database = firebase.database();

var referencia = database.ref("preguntasF");

var preguntasF = {};
var arr = [];
var visualizarP = "";

firebase.database().ref("preguntasF").once('value').then(function (snapshot) {
    var data = snapshot.val();
    for (var k in data) {
        visualizarP += '<tr >';
        visualizarP += '<td>';
        visualizarP += data[k].pregunta + '<td>';
        
        visualizarP += '<td> <button type="button" class="btn btn-primary"data-toggle="modal" data-target="#exampleModal"onclick="setClave(\'' + data[k].clave + '\')">Responder</button> <td>';

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
    location.href = "/Sistema_Bonsai/foroPreg.html";
}