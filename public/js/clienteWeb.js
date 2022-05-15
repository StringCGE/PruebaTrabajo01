function view_listarProspecto() {
    actividad('listar');
    actividadDe(`Listar Prospecto`);
}
function listarProspecto(id) {

}
function view_crearProspecto() {
    actividad('agregar');
    actividadDe(`Crear Prospecto`);
}
function crearProspecto(nombre) {

}
function view_alterarProspecto(id) {
    actividad('listar');
    actividadDe(`Modificar Prospecto`);
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