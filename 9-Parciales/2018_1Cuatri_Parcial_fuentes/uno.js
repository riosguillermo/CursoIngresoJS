
function mostrar() {
    var ancho;
    var largo;
    var perimetro;

    ancho = parseInt(prompt("Ingrese el ancho"));
    while (isNaN(ancho) || ancho <= 0) {
        ancho = parseInt(prompt("Dato invalido. Reingrese el ancho"));
    }
    largo = parseInt(prompt("Ingrese el largo"));
    while (isNaN(largo) || largo <= 0) {
        largo = parseInt(prompt("Dato invalido. Reingrese el largo"));
    }
    perimetro = (ancho + largo) * 2;

alert("El perimetro mide: " + perimetro + " metros.");
}
