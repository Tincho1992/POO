/* 4) CREAR DOS RADIO BUTTONS, CUANDO UNO DE ELLOS SE SELECCIONE
 QUE MUESTRE UN MENSAJE DICIENDO QUE OPCION SE SELECCIONO*/

function mostrarOpcion(){

    var opciones = document.getElementsByName("eleccion");

    for(let i=0; i<opciones.length; i++){
        console.log(opciones[i]);
        if(opciones[i].checked){
            alert(opcines[i].value);
        }
    }
}