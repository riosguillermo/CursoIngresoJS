function mostrar() {
    var precio;
    var descuento;
    var preciofinal;
    var ahorro;

    precio = parseInt(prompt("Ingrese el precio"));
    while (isNaN(precio) || precio <= 0) {
        precio = parseInt(prompt("Dato invalido. Reingrese el precio"));
    }
    descuento = parseInt(prompt("Ingrese el porcentaje de descuento"));
    while (isNaN(descuento) || descuento < 0 || descuento > 100) {
        descuento = parseInt(prompt("Dato invalido. Reingrese el porcentaje de descuento"));
    }

ahorro = precio * descuento / 100;
preciofinal = precio - ahorro;

document.getElementById("elPrecioFinal").value = "Precio final $" + preciofinal;
alert("Usted ha ahorrado $" + ahorro);

}
