/* Este script nace de no encontrar la opcion en css o bootstrap,
puede que exista pero aun no se como */
var caja1 = null;
var caja2 = null;
function resize() {
    cargarDatos(caja1);
    cargarDatos(caja2);
}
function asignaAltoFaltante_id(id){
    asignaAltoFaltante_elem(document.getElementById(id));
}
function asignaAltoFaltante_class(){
    if(val != null){
        for (var i = 0; i < val.length; i++) {
            asignaAltoFaltante_elem(val[i]);
        }
    }
}
function asignaAltoFaltante_elem(caja){
    console.log("desde asigna");
    console.log(caja);
    if (caja == null){
        return;
    }
    caja.style.height = "0px";
    parent = caja.parentNode;
    var childNodes = parent.childNodes;
    var iable = 0;
    for (var i = 0; i < childNodes.length; i++) {
        if (childNodes[i].nodeType != 3 && !(childNodes[i].id === caja.id)){
            iable = iable + childNodes[i].clientHeight;
        }
    }
    var val = parent.clientHeight - iable - 1;
    caja.style.height = val + "px";
}
window.onload = async () => {
    caja1 = document.getElementById('caja1');
    caja2 = document.getElementById('caja2');
    caja1.style.height = "0px";
    caja2.style.height = "0px";
    asignaAltoFaltante_elem(caja1);
    asignaAltoFaltante_elem(caja2);
};
window.onresize = async () => {
    caja1.style.height = "0px";
    caja2.style.height = "0px";
    asignaAltoFaltante_elem(caja1);
    asignaAltoFaltante_elem(caja2);
};