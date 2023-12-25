# Reporte de Traspaso

![Icono](https://raw.githubusercontent.com/LucasAMoralesRomero/reporte-de-traspasos/main/reporte%20de%20traspaso/report.png)

## Advertencia
| :warning: Alerta: Esta es la versión Legacy de Reporte de Traspasos          |
|:---------------------------|
| **Estas en la rama Legacy de Reporte de Traspasos, con soporte para versiones antiguas de Google Chrome **

## Descripción
El "Reporte de Traspaso" es una extensión de Chrome que te permite controlar y generar informes de traspasos de manera sencilla.

## Versión
Versión: 0.0.2

## Instalación
1. Descarga el archivo ZIP de esta extensión o clona el repositorio.
2. Abre la página de extensiones de Chrome: `chrome://extensions/`.
3. Activa el "modo desarrollador" en la esquina superior derecha.
4. Haz clic en "Cargar descomprimida" y selecciona la carpeta donde tienes la extensión.

## Uso
1. Haz clic en el ícono de la extensión en la barra de herramientas de Chrome.
2. Ingresa el número de traspaso y el número de departamento en los campos correspondientes.
3. Presiona el botón "Imprimir reporte" para abrir una nueva pestaña con el informe de traspaso.

## Permisos
Esta extensión requiere el permiso de "tabs" para poder abrir nuevas pestañas en Chrome.

## Advertencia
| :warning: Alerta: Este proyecto está en desarrollo          |
|:---------------------------|
| **Esta extensión está actualmente en construcción y puede contener errores. Si tienes alguna sugerencia o encuentras problemas, te invito a hacer un fork del proyecto y contribuir a su desarrollo.**

## Versiones
La extensión tiene dos versiones:

- **Versión Manifest V3:** Esta versión es compatible con las nuevas versiones de Google Chrome y utiliza el formato de manifest V3.

- **Versión Legacy (Manifest V2):** Esta versión está escrita con el formato de manifest V2 para dar soporte a versiones más antiguas del navegador.

Por favor, asegúrate de utilizar la versión adecuada según la versión de tu navegador.

## Desarrollo
Esta extensión utiliza JavaScript para abrir una nueva pestaña con el informe de traspaso cuando se presiona el botón.

```javascript
// popup.js
window.addEventListener('DOMContentLoaded', function () {
  var nroTraspaso = document.getElementById("nroTraspaso");
  var nroDepartamento = document.getElementById("nroDepartamento");

  var link = document.getElementById('imprimirReporte');
  link.addEventListener('click', function () {
    event.preventDefault();
    var newURL = "http://ruta-al-reporte" + nroTraspaso.value + "&departamento=" + nroDepartamento.value;
    chrome.tabs.create({ url: newURL });
  })
})