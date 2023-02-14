let contador = 1;

function mostarPublicidad() {
    if (contador === 5) {
        //detener intervalo
        window.clearInterval(codigo)
    }
    document.write(`<p>Ahora muestro publicidad</p> ${contador}`);
    contador++;

}

// Ejecutar funcion luego de un determinado tiempo
//window.setTimeout(mostarPublicidad,3000);
// window.setTimeout(function () {
//     document.write("<p>Ahora muestro publicidad</p>");
// }, 2000)

//setTimeout(()=>{document.write("<p>Ahora muestro publicidad</p>");},2500)

//Ejecutar una funcion cada cierto tiempo en milisegundos
//window.setInterval(mostarPublicidad,3000);
let codigo = setInterval(mostarPublicidad, 2000);