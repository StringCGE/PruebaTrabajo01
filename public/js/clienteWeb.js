function view_listarProspecto(msg) {
    actividad('listar');
    actividadDe(`Listar Prospecto`);
    visible_botones_accion(true);
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
            console.log(`msg ${msg}`);
            if(msg != null){
                console.log(`msg: ${msg}`);
                $("#contenido").html(`<div class="row img-col text-center"><div>${msg}</div></div>` + response);
            }else{
                $("#contenido").html(response);
            }
        }
    });
}
//'/api/prueba.app?_method=DELETE'
function view_agregarProspecto() {
    actividad('agregar');
    actividadDe(`Crear Prospecto`);
    visible_botones_accion(false);
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
            $("#contenido").html(response);
        }
    });
}
function view_alterarProspecto(_id) {
    actividad('listar');
    actividadDe(`Modificar Prospecto`);
    visible_botones_accion(false);
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
    visible_botones_accion(true);

}

function crearProspecto(nombre) {
    visible_botones_accion(false);

}

function alterarProspecto(id, nombre) {
    //view_listarProspecto(response);
    visible_botones_accion(false);
    alert("Alterar");
}
function eliminarProspecto(_id) {
    let parametros = {
        id:_id
    }
    //
    $.ajax({
        data:  parametros,
        url:   '/prospecto/?_method=DELETE',
        type:  'post',
        beforeSend: function () {
            //$("#resultado").html("Procesando, espere por favor...");
        },
        success:  function (response) {
            //$("#contenido").html(response);
            view_listarProspecto(response);
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
let id_altera = -1;
function cargar(){
    $("#tablita tr").click(function(){
        var value=$(this).find('td:first')[0].firstChild.innerHTML;
        if (!isNaN(value)){
            $(this).addClass('selected').siblings().removeClass('selected');  
            id_altera = value;
        }
    });
}

function alterarprospectobutton(){

    if (!isNaN(id_altera)){
        if(id_altera >= 0){
            view_alterarProspecto(id_altera);
            return;
        }
    }
    alert('Seleccione una fila');
}
function eliminarprospectobutton(){
    if (!isNaN(id_altera)){
        if(id_altera >= 0){
            mi_alerta((isConfirm)=>{
                //isConfirmed: false, isDenied: false, isDismissed: true, dismiss: 'cancel'
                if(isConfirm.isConfirmed){
                    eliminarProspecto(id_altera);
                }else{
                    //alert("no se eliminara el registro.");
                }
            });
            return;
        }
    }
    alert('Seleccione una fila');
}

function visible_botones_accion(val){
    let bt = document.getElementById('botones-accion');
    if(val){
        bt.style.visibility='visible';
        bt.style.height = 'auto';
    }else{
        bt.style.visibility='hidden';
        bt.style.height = '0px';
    }
}

