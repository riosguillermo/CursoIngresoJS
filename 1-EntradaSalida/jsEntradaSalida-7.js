/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var uno;
    var dos;
    var resultado;
    
    uno = document.getElementById("numeroUno").value;
    dos = document.getElementById("numeroDos").value;
    
    uno = parseInt(uno);
    dos = parseInt(dos);
    
    resultado = uno + dos; 
    
    alert("El resultado es " + resultado);
}

function restar()
{
    var uno;
    var dos;
    var resultado;
    
    uno = document.getElementById("numeroUno").value;
    dos = document.getElementById("numeroDos").value;
    
    uno = parseInt(uno);
    dos = parseInt(dos);
    
    resultado = uno - dos; 
    
    alert("El resultado es " + resultado);	
}

function multiplicar()
{ 
    var uno;
    var dos;
    var resultado;
    
    uno = document.getElementById("numeroUno").value;
    dos = document.getElementById("numeroDos").value;
    
    uno = parseInt(uno);
    dos = parseInt(dos);
    
    resultado = uno * dos; 
    
    alert("El resultado es " + resultado);	
}

function dividir()
{
    var uno;
    var dos;
    var resultado;
    
    uno = document.getElementById("numeroUno").value;
    dos = document.getElementById("numeroDos").value;
    
    uno = parseInt(uno);
    dos = parseInt(dos);
    
    resultado = uno / dos; 
    
    alert("El resultado es " + resultado);	
}

