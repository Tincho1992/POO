/* 5) CREAR UN INPUT Y UN BOTON, CUANDO LE DEMOS AL BOTON
SE AÑADIRA EL TEXTO QUE HEMOS PUESTO EN UN DIV VACIO*/

function añadirTexto(){

    var texto = document.getElementById("texto");
    var mostrar = document.getElementById("mostrar-texto");

    mostrar.innerHTML += texto.value;
}