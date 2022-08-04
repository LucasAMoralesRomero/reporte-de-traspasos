//obtenemos el boton de reporte
const imprimirReporte = document.getElementById("imprimirReporte");
//obtenemos numero de traspaso
const nroTraspaso = document.getElementById("nroTraspaso");
//obtenemos numero de departamento
const nroDepartamento = doocument.getElementById("nroTraspaso");
//cuando el boton es presionado,abrimos una nueva pestaña con el traspaso

function abrirNuevaPestana(dir){
    //abrimos la nueva pestaña
    var win = window.open(dir, '_blank');
    //cambia el foco a la pestaña nueva
    win.focus();
}
function imprimirReporte(){
    //lanzamos la pestaña con el contenido de reporte
    
}
$('#imprimirReporte').click(function(){abrirNuevaPestana('prueba'+ nroTraspaso + '&' + nroDepartamento)});