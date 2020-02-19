function mostrar() {

	var contador = -1;
	var acumulador = 0;
	var num = 0;

	while (!isNaN(num)) {

		acumulador = acumulador + num;
		contador++
		num = parseInt(prompt("Ingrese un numero para sumar o cualquier finalizar"));

	}


	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = acumulador / contador;

}//FIN DE LA FUNCIÓN