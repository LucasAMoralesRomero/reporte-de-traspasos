console.log("extension corriendo...");
//obtenemos el boton de reporte
const imprimirReporte = document.getElementById("imprimirReporte");
//obtenemos numero de traspaso
let nroTraspaso = document.getElementById("nroTraspaso");
//obtenemos numero de departamento
let nroDepartamento = document.getElementById("nroTraspaso");
//cuando el boton es presionado,abrimos una nueva pestaña con el traspaso

function openTab(){
    var newTab = browser.tabs.create({url:'http://aplicaciones/recepciones/REPORTESGENERALES/TraspasosSobFalt2.asp?mvNumtras='+nroTraspaso+'&mvCgruempr=&mvdepto='+nroDepartamento+'&mvsuc=184',active:true})
    
}