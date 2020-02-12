function mostrar()
{
//tomo la edad  
var edad;
var estado;

edad = parseInt(document.getElementById("edad").value);
estado = document.getElementById("estadoCivil").value;

if (edad <=17 && estado != "Soltero"){

    alert("Es muy joven para no ser soltero");
}


}//FIN DE LA FUNCIÓN