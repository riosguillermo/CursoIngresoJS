function mostrar() {
    var nota;
    var genero;
    var contadoraprobados = 0;
    var acumuluadornota = 0;
    var notabaja;
    var perbajo;
    var flag = 0;
    var promedio;

    for (var i = 1; i <= 5; i++) {
        nota = parseInt(prompt("Ingrese la nota del alumno Nº" + i));
        while (isNaN(nota) || nota < 0 || nota > 10) {
            nota = parseInt(prompt("Invalido. Reingrese la nota del alumno Nº" + i));
        }
        genero = prompt("Ingrese el genero del alumno Nº" + i);
        while (genero != "f" && genero != "m") {
            genero = parseInt(prompt("Invalido. Reingrese el genero del alumno Nº" + i));
        }
        acumuluadornota = acumuluadornota + nota;
        if (nota < notabaja || flag == 0) {
            notabaja = nota;
            perbajo = genero;
            flag = 1;
        }
        if (genero == "m" && nota >= 6) {
            contadoraprobados++;
        }
    }
    promedio = acumuluadornota / 5;
    alert("El promedio de las notas es de: " + promedio + "\n La nota mas baja fue de: " + notabaja + "\ny pertenece al genero: + " + perbajo + "\nLa cantidad de varones aprobados fue de: " + contadoraprobados);
}
