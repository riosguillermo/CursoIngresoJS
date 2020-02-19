function mostrar() {

	var contador = 0;
	var acumulador = 0;
	var num = 0;

	while (contador < 5) {

		num = parseInt(prompt("Ingrese un numero"));
		acumulador = acumulador + num;
		contador++;
		
	}



	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = acumulador / contador;

}//FIN DE LA FUNCIÓN