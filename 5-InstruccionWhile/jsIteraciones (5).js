function mostrar() {

    var sexo = prompt("ingrese f ó m .");

    //while(!(sexo == "f" || sexo == "m" || sexo == "F" || sexo == "M")){
    while (sexo != "f" && sexo != "m") {
        sexo = prompt("Error. Ingrese f ó m .");

    }



    document.getElementById('Sexo').value = sexo;

}//FIN DE LA FUNCIÓN