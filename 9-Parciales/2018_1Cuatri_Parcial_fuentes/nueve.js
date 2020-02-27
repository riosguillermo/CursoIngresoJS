function mostrar() {
    var marca;
    var peso;
    var temperatura;
    var contadorTempPares = 0;
    var marcaPesada;
    var contadorTempBajoCero = 0;
    var promedioPeso;
    var pesoMax;
    var pesoMin;
    var seguir;
    var contador = 0;
    var acumuladorpeso = 0;
    var flag = 0;

    do {
        //Toma de datos y validacion-------------------------------------------------------------------
        marca = prompt("Ingrese la marca del producto");
        peso = parseInt(prompt("Ingrese el peso del producto(min: 1 max: 100)"))
        while (isNaN(peso) || peso < 1 || peso > 100) {
            peso = parseInt(prompt("Error. Reingrese el peso del producto(min: 1 max: 100)"))
        }
        temperatura = parseInt(prompt("Ingrese la temperatura de conserva(min: -30 max: 30)"));
        while (isNaN(temperatura) || temperatura < -30 || temperatura > 30) {
            temperatura = parseInt(prompt("Error. Ingrese la temperatura de conserva(min: -30 max: 30)"));
        }
        //Temperaturas Pares-----------------------------------------------------------------------------
        if (temperatura % 2 == 0) {
            contadorTempPares++;
        }
        //Producto mas y menos pesado -----------------------------------------------------------------------
        if (peso > pesoMax || flag == 0) {
            pesoMax = peso;
            marcaPesada = marca;
        }
        if (peso < pesoMin || flag == 0) {
            pesoMin = peso;
            flag = 1;
        }
        //contador temperaturas bajo cero ----------------------------------------------------------
        if (temperatura < 0) {
            contadorTempBajoCero++;
        }
        //-----------------------------------------------------------------------------------
        acumuladorpeso = acumuladorpeso + peso;
        contador++;
        seguir = prompt("Desea ingresar mas datos?");
    } while (seguir == "s");

 promedioPeso = acumuladorpeso / contador;

 document.write("Cantidad de temperaturas pares: " + contadorTempPares + 
                "</br>Marca del producto mas pesado: " + marcaPesada +
                "</br>Cantidad de productos que se conservan bajo cero: " + contadorTempBajoCero +
                "</br>Promedio del peso de los productos: " + promedioPeso +
                "</br>Peso Maximo: " + pesoMax +
                "</br>Peso Minimo: " + pesoMin);







}
