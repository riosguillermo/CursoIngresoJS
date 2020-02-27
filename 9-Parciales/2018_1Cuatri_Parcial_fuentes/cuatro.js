function mostrar() {
    var uno;
    var dos;


    uno = parseInt(prompt("Ingrese el primer numero"));
    while (isNaN(uno)) {
        uno = parseInt(prompt("Dato invalido. Reingrese el primer numero"));
    }
    dos = parseInt(prompt("Ingrese el segundo numero"));
    while (isNaN(dos)) {
        dos = parseInt(prompt("Dato invalido. Reingrese el segundo numero"));
    }

    if (uno == dos) {
        alert(uno + " y " + dos);
    }
    else if (uno > dos) {
        alert(uno - dos);
    } else {
        alert(uno + dos);
    }
    if (uno + dos > 10) {
        alert("La suma es " + (uno + dos) + " y supero el numero 10");
    }
}
