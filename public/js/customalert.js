function mi_alerta(func){
    Swal.fire({
        title: 'Eliminando registro',
        text: 'Desea eliminar el registro?',
        //html: "<h1>h1</h1>"
        //icon:''//success error warnig info question
        confirmButtonText:"no no no Bueno SI",
        cancelButtonText:"no",
        //footer:"<span>footer<span>",
        width:'50%',
        backdrop: true,
        showConfirmButton: true,
        showCancelButton: true,
        //timer:5000;
        //timerprogressbar: true
        //toast: true;
        //position:'bottom-end'
    
        //input: 'text',
        //inputPlaceholder: 'Nombre',
    
    }).then((isConfirm)=>{
        func(isConfirm);
    });
}
