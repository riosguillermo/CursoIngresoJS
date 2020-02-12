function mostrar()
{
//tomo la edad  
var edad;

edad = document.getElementById("edad").value;
edad = parseInt(edad);

if(edad <= 13){

    alert("Niño");
  }
 else if(edad <= 17){
     alert("adolescente");
 }
 else{
     alert("adulto");
 }



}//FIN DE LA FUNCIÓN