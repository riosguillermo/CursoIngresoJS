/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
    var nombre;
    
    //con la funcion document. nos comunicamos con el html, buscamos el elemento necesario por su id y con .value tomamos su valor
    nombre = document.getElementById("elNombre").value;

    alert(nombre);
    
}


