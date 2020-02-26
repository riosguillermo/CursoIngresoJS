function mostrar() {
    var repeticiones = prompt("ingrese el número de repeticiones");
    while (isNaN(repeticiones) || repeticiones <= 0) {
        repeticiones = prompt("Dato invalido. Reingrese el número de repeticiones");

    }
    for (var contador = 0; contador < repeticiones; contador++) {
        document.write("Hola UTN FRA </br>" + contador);
    }


}//FIN DE LA FUNCIÓN