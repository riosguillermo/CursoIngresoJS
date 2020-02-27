function mostrar() {
    var letra;
    var numero;
    var contadorPares = 0;
    var contadorImpares = 0;
    var contadorCeros = 0;
    var acumuladorNegativos = 0;
    var acumuladorPositivos = 0;
    var contadorPositivos = 0;
    var promedioPositivos;
    var numMax;
    var letMax;
    var numMin;
    var letMin;
    var flag = 0;
    var seguir;


    do {
        //Ingreso de datos y validacion----------------------------------------------
        letra = prompt("Ingrese una letra");
        while (!((letra >= 'A' && letra <= 'Z') || (letra >= 'a' && letra <= 'z'))) {
            letra = prompt("Eso no es una letra. Ingrese una letra");
        }

        numero = parseInt(prompt("Ingrese un numero entre -100 y 100"));
        while (numero < -100 || numero > 100 || isNaN(numero)) {
            numero = parseInt(prompt("Numero invalido. Reingrese un numero entre -100 y 100"));
        } // --------------------------------------------------------------------------
        //Contar Pares e Impares -------------------------------------------
        if (numero % 2 == 0) {
            contadorPares++;
        }
        else {
            contadorImpares++;
        }
        //---------------------------------------------------------------------------------
        //Positivos, Negativos y Ceros-----------------------------------------------------
        if (numero > 0) {
            acumuladorPositivos = acumuladorPositivos + numero;
            contadorPositivos++;
        } else if (numero < 0) {
            acumuladorNegativos = acumuladorNegativos + numero;
        } else {
            contadorCeros++;
        } //----------------------------------------------------------------------------------
        //Maximos y Minimos-----------------------------------------------------------------
        if (numero < numMin || flag == 0) {
            numMin = numero;
            letMin = letra;
        }
        if (numero > numMax || flag == 0) {
            numMax = numero;
            letMax = letra;
            flag = 1;
        }//------------------------------------------------------------------------------------
        //Preguntar si desea ingresar mas datos--------------------------------------------------
        seguir = prompt("¿Desea ingresar mas datos?");
    } while (seguir == "s");
    //promedio de los positivos----------------------------------------------------------------------
    if (contadorPositivos != 0) {
        promedioPositivos = acumuladorPositivos / contadorPositivos;
    } else {
        promedioPositivos = "-";
    }
    //---------------------------------------------------------------------------------------------
    document.write("Cantidad de pares: " + contadorPares + "</br>Cantidad de Impares: " + contadorImpares + "</br>Cantidad de ceros: " + contadorCeros + "</br>Promedio de los positivos: " + promedioPositivos + "</br>Suma de los numeros negativos: " + acumuladorNegativos + "</br>El numero maximo fue: " + numMax + " y su letra fue: " + letMax + "</br> El numero minimo fue: " + numMin + " y su letra fue: " + letMin);




}
