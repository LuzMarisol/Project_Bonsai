// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDOEyKjTqawZ2nxnvXGNN1KLhQYJP9eOh8",
    authDomain: "bdbonsai-55379.firebaseapp.com",
    databaseURL: "https://bdbonsai-55379-default-rtdb.firebaseio.com",
    projectId: "bdbonsai-55379",
    storageBucket: "bdbonsai-55379.appspot.com",
    messagingSenderId: "1055742813594",
    appId: "1:1055742813594:web:4e23c55027cf7a0b7f0623"
};
// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
coleccionBonsais = db.ref().child('bonsais');
bodyBonsai = $('#bodyBonsai').val();

//Formulario para agregar datos
$('form').submit(function(e){
    e.preventDefault();
    let id = $('#id').val();
    let codigo = $('#codigo').val();
    let especie = $('#especie').val();
    let nombreCientifico = $('#nombreCientifico').val();
    let nombreComun = $('#nombreComun').val();
    let edad = $('#edad').val();
    let estilo = $('#estilo').val();
    let precio = $('#precio').val();
    let cultivo = $('#cultivo').val();
    let maceta = $('#maceta').val();
    let riego = $('#riego').val();
    let trasplante = $('#trasplante').val();
    let lugar = $('#lugar').val();
    let cantidad = $('#cantidad').val();
    let tipo = $('#tipo').val();

    let idFirebase = id;
    var con = oleccionBonsais.push();
    if(idFirebase==''){
        idFirebase = con.key;
    };
    data = {clave: con.getKey(), codigo:codigo, especie:especie, nombreCientifico:nombreCientifico, nombreComun:nombreComun, edad:edad, estilo:estilo, precio:precio, cultivo:cultivo, maceta:maceta, riego:riego,trasplante:trasplante, lugar:lugar, cantidad:cantidad, tipo:tipo}
    
    actualizacionData = {};
    actualizacionData[`/${idFirebase}`] = data;

    coleccionBonsais.update(actualizacionData);
    id = '';
    $("form").trigger("reset");
    $('#modalAltaEdicion').modal('hide');
});

const iconoEditar = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16"><path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/><path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/></svg>'
const iconoBorrar = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/></svg>'

function mostrarBonsais({codigo, especie, nombreCientifico, nombreComun, edad, estilo, precio, cultivo, maceta, riego, trasplante, lugar, cantidad, tipo}){
    return `
    <td> ${codigo}</td>
    <td> ${especie}</td>
    <td> ${nombreCientifico}</td>
    <td> ${nombreComun}</td>
    <td> ${edad}</td>
    <td> ${estilo}</td>
    <td> ${precio}</td>
    <td> ${cultivo}</td>
    <td> ${maceta}</td>
    <td> ${riego}</td>
    <td> ${trasplante}</td>
    <td> ${lugar}</td>
    <td> ${cantidad}</td>
    <td> ${tipo}</td>
    <td><button class="btnEditar btn btn-secondary" data-toggle="tooltip" title="Editar">${iconoEditar}</button> <button class="btnBorrar btn btn-danger" data-toggle="tooltip" title="Borrar">${iconoBorrar}</button></td>
    `
};

//CHILD_ADDED 
coleccionBonsais.on('child_added', data =>{
    let tr = document.createElement('tr')
    tr.id = data.key
    tr.innerHTML = mostrarBonsais(data.val())
    document.getElementById('bodyBonsai').appendChild(tr)
});

//CHILD_CHANGED
coleccionBonsais.on('child_changed', data =>{
    let nodoEditado = document.getElementById(data.key)
    nodoEditado.innerHTML = mostrarBonsais(data.val())
});

//CHILD_REMOVED
coleccionBonsais.on('child_removed', data =>{
    let nodoEditado = document.getElementById(data.key)
    document.getElementById('bodyBonsai').removeChild(nodoEditado)
});

//Programación de los botones
$('#btnAgregar').click(function(){
    $('#id').val('')
    $('#codigo').val('');
    $('#especie').val('');
    $('#nombreCientifico').val('');
    $('#nombreComun').val('');
    $('#edad').val('');
    $('#estilo').val('');
    $('#precio').val('');
    $('#cultivo').val('');
    $('#maceta').val('');
    $('#riego').val('');
    $('#trasplante').val('');
    $('#lugar').val('');
    $('#cantidad').val('');
    $('#tipo').val('');
    $("form").trigger("reset");
    $('#modalAltaEdicion').modal('show');
});

//Boton de editar
$('#tablaBonsai').on('click', '.btnEditar', function(){
    let id = $(this).closest('tr').attr('id');
    let codigo = $(this).closest('tr').find('td:eq(0)').text();
    let especie = $(this).closest('tr').find('td:eq(1)').text();
    let nombreCientifico = $(this).closest('tr').find('td:eq(2)').text();
    let nombreComun = $(this).closest('tr').find('td:eq(3)').text();
    let edad = $(this).closest('tr').find('td:eq(4)').text();
    let estilo = $(this).closest('tr').find('td:eq(5)').text();
    let precio = $(this).closest('tr').find('td:eq(6)').text();
    let cultivo = $(this).closest('tr').find('td:eq(7)').text();
    let maceta = $(this).closest('tr').find('td:eq(8)').text();
    let riego = $(this).closest('tr').find('td:eq(9)').text();
    let trasplante = $(this).closest('tr').find('td:eq(10)').text();
    let lugar = $(this).closest('tr').find('td:eq(11)').text();
    let cantidad = $(this).closest('tr').find('td:eq(12)').text();
    let tipo = $(this).closest('tr').find('td:eq(13)').text();
   
    $('#id').val(id);
    $('#codigo').val(codigo);
    $('#especie').val(especie);
    $('#nombreCientifico').val(nombreCientifico);
    $('#nombreComun').val(nombreComun);
    $('#edad').val(edad);
    $('#estilo').val(estilo);
    $('#precio').val(precio);
    $('#cultivo').val(cultivo);
    $('#maceta').val(maceta);
    $('#riego').val(riego);
    $('#trasplante').val(trasplante);
    $('#lugar').val(lugar);
    $('#cantidad').val(cantidad);
    $('#tipo').val(tipo);
    $('#modalAltaEdicion').modal('show');
});

//Boton de borrar
$('#tablaBonsai').on('click', '.btnBorrar', function(){
    Swal.fire({
        title: '¿Estás seguro de eliminar este bonsái?',
        text: "¡Esta operación no se puede revertir!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Borrar'
    }).then((result) =>{
        if(result.value){
            let id = $(this).closest('tr').attr('id'); //Se captura el atributo ID de la fila
            db.ref(`bonsais/${id}`).remove() //Elimina el bonsai de firebase
            Swal.fire('¡Eliminado!', 'El bonsái ha sido eliminado', 'success')
        }
    })
});