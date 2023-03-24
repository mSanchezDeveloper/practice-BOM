function obtenerFecha() {
    let fecha = new Date();
    let semanas = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    let fechaReloj = document.getElementById(`fecha`);
    fechaReloj.innerHTML = `${semanas[fecha.getDay()]} ${fecha.getDate()} de ${meses[fecha.getMonth()]} del ${fecha.getFullYear()}`;

    //Arreglas los valores de un digito
    let horas = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();
    
    if (horas < 10) {
        horas = `0${horas}`;
    }
    
    if (minutos < 10) {
        minutos = `0${minutos}`;
    }

    if (segundos < 10) {
        segundos = `0${segundos}`;
    }

    let horaReloj = document.querySelector('#hora');
    horaReloj.innerHTML = `${horas}:${minutos}:${segundos}`;
}
setInterval(obtenerFecha, 1000);

function cambiarColor(color){
    let seccion = document.getElementsByClassName('fecha-hora');
    console.log(seccion[0]);
    seccion[0].className=`fecha-hora ${color}`;
}