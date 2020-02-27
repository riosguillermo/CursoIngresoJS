function mostrar() {
    var repeticiones = prompt("ingrese un número");
    var divisores = 0;
    while (isNaN(repeticiones) || repeticiones <= 0) {
        repeticiones = prompt("Dato invalido. Reingrese el número");

    }
    for (var contador = 1; contador <= repeticiones; contador++) {
        if (repeticiones % contador == 0) {
            divisores++;
            document.write(contador + "</br>");

        }
    }
    document.write("Total de numeros divisores: " + divisores);

}//FIN DE LA FUNCIÓN