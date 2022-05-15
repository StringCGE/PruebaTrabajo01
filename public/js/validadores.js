const cedula = function (num){
    // /^[0-9]{10}$/g;
    if ((!(/^[0-9]{10}$/g).test(num)))
        return false;

    let prov = num[0] + num[1];
    let tercer = num[2];
    
    if((prov < 0) && (prov > 24)){
        return false; //provincia mal asignada
    }
    if(!((tercer >= 0) && (tercer < 6))){
        return false; //entre [0 - 5]
    }
    
    let res = 0;
    for(let i = 0; i<9 ;i++){
        /*no usaro por legibilidad
        res = ((i % 2) == 0)?Number(res) + Number(rs(num[i] * 2)):Number(res) + Number(rs(num[i]));
        */
        if((i % 2) == 0){
            res = Number(res) + Number(rs(num[i] * 2));
        }else{
            res = Number(res) + Number(rs(num[i]    ));
        }
    }

    res = res % 10;
    res = res=0?res:10-res
    return num[9] == res;
}
/* Restar si*/
function rs(value){
    return value>9?value-9:value;
}
const rx_correo = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
const correo = function(cor){
    return rx_correo.test(cor);
}
const rx_nombre = /^[A-Z]+$/i;
const nombre = function(nom){
    return rx_nombre.test(nom);
}

const celular = function(cel){
    return (/^[0-9]{10}$/g).test(cel);
}