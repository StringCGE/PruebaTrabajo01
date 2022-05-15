function view_listarProspecto() {
    actividad('listar');
    actividadDe(`Listar Prospecto`);
    let parametros = {

    }
    $.ajax({
        data:  parametros,
        url:   '/prospecto/page/web',
        type:  'get',
        beforeSend: function () {
            //$("#resultado").html("Procesando, espere por favor...");
        },
        success:  function (response) {
            $("#contenido").html(response);
        }
    });
}
//'/api/prueba.app?_method=DELETE'
function view_agregarProspecto() {
    actividad('agregar');
    actividadDe(`Crear Prospecto`);
    let parametros = {

    }
    $.ajax({
        data:  parametros,
        url:   '/prospecto/page/web',
        type:  'post',
        beforeSend: function () {
            //$("#resultado").html("Procesando, espere por favor...");
        },
        success:  function (response) {
            console.log(response);
            $("#contenido").html(response);
        }
    });
}
function view_alterarProspecto(_id) {
    actividad('listar');
    actividadDe(`Modificar Prospecto`);
    let parametros = {
        id:_id
    }
    //
    $.ajax({
        data:  parametros,
        url:   '/prospecto/page/web/?_method=PUT',
        type:  'post',
        beforeSend: function () {
            //$("#resultado").html("Procesando, espere por favor...");
        },
        success:  function (response) {
            $("#contenido").html(response);
        }
    });
}

function listarProspecto(id) {

}

function crearProspecto(nombre) {

}

function alterarProspecto(id, nombre) {
    alert("Alterar");
}
function eliminarProspecto(id) {
    let parametros = {
        id:_id
    }
    //
    $.ajax({
        data:  parametros,
        url:   '/prospecto/web/?_method=DELETE',
        type:  'post',
        beforeSend: function () {
            //$("#resultado").html("Procesando, espere por favor...");
        },
        success:  function (response) {
            $("#contenido").html(response);
        }
    });
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