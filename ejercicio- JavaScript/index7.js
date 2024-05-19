function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}


function aleatorio(){
    let opciones = "";
    for (let i=0; i<10; i++){
        opciones +="<option>" +getRandomInt(1,100) + "</option>";
    }

    elementos.innerHTML = opciones;
}