function view_listarProspecto() {
    actividad('listar');
    actividadDe(`Listar Prospecto`);
    let parametros = {

    }
    //?_method=DELETE
    $.ajax({
        data:  parametros,
        url:   '/prospecto/page/list',
        type:  'get',
        beforeSend: function () {
            //$("#resultado").html("Procesando, espere por favor...");
        },
        success:  function (response) {
            $("#caja2").html(response);
        }
    });
}
//'/api/prueba.app?_method=DELETE'
function view_crearProspecto() {
    actividad('agregar');
    actividadDe(`Crear Prospecto`);

}
function view_alterarProspecto(id) {
    actividad('listar');
    actividadDe(`Modificar Prospecto`);

}

function listarProspecto(id) {

}

function crearProspecto(nombre) {

}

function alterarProspecto(id, nombre) {
    alert("Alterar");
}
function eliminarProspecto(id) {
    alert("Eliminar");
}
function accion(id) {
    var img_accion = document.getElementById('img-accion');
    img_accion.setAttribute("src", "/img/default-user.png");
    $("#txt-accion").html("Hola" + id);
}

function actividadDe(nombre){
    $("#txt-accion").html(`<h2>${nombre}</h2>`);
}
function actividad(value){
    var img_accion = document.getElementById('img-accion');
    switch(value){
        case 'listar':
            img_accion.setAttribute("src", "/img/listar.png");
        break;
        case 'agregar':
            img_accion.setAttribute("src", "/img/agregar.png");
        break;
    }
}
function listar(){
    alert("caracteristica aun no soportada");
}