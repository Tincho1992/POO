/*8) DADO UN INPUT Y UN BOTON, ESCRIBIR NOMBRES DE PERSONAS
(NO CONTROLAMOS NADA DE MOMENTO) Y LO MOSTRAMOS 
EN UNA LISTA DESORDENADA. */ 

function insertarNombre(event){
    event.preventDefault();

    let nombre = document.getElementById("nombre").value;

    if (nombre == ""){
        alert("No es un nombre existente");
    } else {
    let opcion = "<li> " + nombre + "</li>";

    let lista = document.getElementById("lista-nombres");
    
    lista.innerHTML += opcion;

    alert("Se ha insertado el nombre");
    }

}