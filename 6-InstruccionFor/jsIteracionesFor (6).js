function mostrar() {
    var repeticiones = prompt("ingrese un número");
    var pares = 0;
    while (isNaN(repeticiones) || repeticiones <= 0) {
        repeticiones = prompt("Dato invalido. Reingrese el número");

    }
    for (var contador = 1; contador <= repeticiones; contador++) {
        if (contador % 2 == 0) {
            pares++;
            document.write(contador + "</br>");

        }
    }
    document.write("Total de numeros pares: " + pares);

}//FIN DE LA FUNCIÓN