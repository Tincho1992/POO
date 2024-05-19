/*6) CREAR DOS INPUT DE NUMEROS Y UN BOTON, AL PULSAR
 EL BOTON, MOSTRAR UN ALERT QUIEN ES EL MAYOR DE LOS DOS */

 function numMayor(){

    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);

 if(num1 && num2){
    if(num1 >= num2){
    if (num1 == num2){
        alert("Los numeros son iguales")
    }else{
        alert("El num 1 es mayor")
    }

} else{
    alert("El num 2 es mayor")
}
 } else{
    alert("Un elemento esta vacio")
 }
 };