


//cuando el boton es presionado,abrimos una nueva pestaña con el traspaso
//agregamos event listener al boton
window.addEventListener('DOMContentLoaded', function(){
//obtenemos los elementos del formulario (nro de traspaso, departamento)
    var nroTraspaso = document.getElementById("nroTraspaso");
    var nroDepartamento =this.document.getElementById("nroDepartamento");

    var link = this.document.getElementById('imprimirReporte');
    link.addEventListener('click', function(){
        event.preventDefault();
        //pasamos a la funcion la direccion de reportes, junto con los valores de traspaso y departamento (obteniendo los valores alojadas en las variables)
        var newURL = "http://aplicaciones/recepciones/REPORTESGENERALES/TraspasosSobFalt2.asp?mvNumtras="+nroTraspaso.value+"&mvCgruempr=&mvdepto="+nroDepartamento.value+"&mvsuc=184";
        chrome.tabs.create({url: newURL})
    })
})

