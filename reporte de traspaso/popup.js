//obtenemos numero de traspaso
let nroTraspaso = document.getElementById("nroTraspaso");
//obtenemos numero de departamento
let nroDepartamento = document.getElementById("nroTraspaso");
//cuando el boton es presionado,abrimos una nueva pestaña con el traspaso
//agregamos event listener al boton
window.addEventListener('DOMContentLoaded', function(){
    var link = this.document.getElementById('imprimirReporte');
    link.addEventListener('click', function(){
        var newURL = "http://aplicaciones/recepciones/REPORTESGENERALES/TraspasosSobFalt2.asp?mvNumtras="+nroTraspaso+"&mvCgruempr=&mvdepto="+nroDepartamento+"&mvsuc=184";
        chrome.tabs.create({url: newURL})
    })
})
console.log("extension corriendo...");
