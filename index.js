class calculadora{

    calcularBilletes() {
        let $input = document.getElementById("result");
        let vuelto = parseInt($input.value);
        const billetes = [50, 20, 10, 5, 1];
        let cantidadBilletes = [];
        for (let i = 0; i < billetes.length; i++) {
          const billete = billetes[i];
          const cantidad = Math.floor(vuelto / billete);
          if (cantidad > 0) {
            cantidadBilletes[billete] = cantidad;
            vuelto -= cantidad * billete;
          }
        }
        let resultado = "Resultado: ";
        for (let billete in cantidadBilletes) {
          resultado += `${cantidadBilletes[billete]} billete(s) de $${billete}, `;
        }
        $input.value = `[${resultado}]`;
      }
      base10_2() {
        let $input = document.getElementById("result");
        let numero = parseInt($input.value);
        let arreglo = func.isDigitos(numero, 2);
        let base2 = "";
        for (let i = arreglo.length - 1; i >= 0; i--) {
          base2 = base2 + arreglo[i].toString();
        }
        $input.value = `[Base10=${numero}] ==> Base2=${base2}`;
      }
    
      base10_16() {
        let $input = document.getElementById("result");
        let numero = parseInt($input.value);
        let arreglo = func.isDigitos(numero, 16);
        let base16 = "";
        let hexa = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
        for (let i = arreglo.length - 1; i >= 0; i--) {
          base16 = base16 + hexa[arreglo[i]];
        }
        $input.value = `[Base10=${numero}] ==> Base16=${base16}`;
      }
    
      base10_8() {
        let $input = document.getElementById("result");
        let numero = parseInt($input.value);
        let arreglo = func.isDigitos(numero, 8);
        let base8 = "";
        for (let i = arreglo.length - 1; i >= 0; i--) {
          base8 = base8 + arreglo[i].toString();
        }
        $input.value = `[Base10=${numero}] ==> Base8=${base8}`;
      }
    
      base2_10() {
        let $input = document.getElementById("result");
        let numero = parseInt($input.value);
        let arreglo = func.isDigitos(numero, 10);
        let base10 = 0,
          limite = arreglo.length - 1;
        for (let i = arreglo.length - 1; i >= 0; i--) {
          base10 = base10 + arreglo[i] * func.isExponente(2, limite);
          limite = limite - 1;
        }
        $input.value = `[Base2=${numero}] ==> Base10=${base10}`;
      }
    
      base2_16() {
        let $input = document.getElementById("result");
        let numero = $input.value;
        let base10 = 0;
        let exponente = 0;
        for (let i = numero.length - 1; i >= 0; i--) {
          //Primero se debe convertir a base 10.
          let digito = parseInt(numero[i]);
          base10 += digito * func.isExponente(2, exponente);
          exponente++;
          let arreglo = func.isDigitos(base10, 16); // Se obtiene el arreglo de dígitos en base 16
          let base16 = "";
          let hexa = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
          for (let i = arreglo.length - 1; i >= 0; i--) {
            base16 = base16 + hexa[arreglo[i]];
          }
          $input.value = `[Base2=${numero}] ==> Base16=${base16}`;
        }
      }
    
      base2_8() {
        let $input = document.getElementById("result");
        let numero = $input.value;
        let base10 = 0;
        let exponente = 0;
        for (let i = numero.length - 1; i >= 0; i--) {
          //De la misma forma de convierte a base 10 primero.
          let digito = parseInt(numero[i]);
          base10 += digito * func.isExponente(2, exponente);
          exponente++;
        }
        let arreglo = func.isDigitos(base10, 8);
        let base8 = "";
        for (let i = arreglo.length - 1; i >= 0; i--) {
          base8 = base8 + arreglo[i];
        }
        $input.value = `[Base2=${numero}] ==> Base8=${base8}`;
      }

      arregloCadena(){
      let $input    = document.getElementById("result")
      let dato      = $input.value;
      let caracter  = prompt("Dame caracter para crear cadena")
      if(dato == "" || (caracter == "" && caracter == null)) {
        $input.value = "ERROR. No se puede calcular o realizar el ejercicio, faltan parametros que establecer"
        return;
      }
      let array       = func.spliter(dato, ",");
      let longitud    = array.length;
      let cadenafinal = "";
      // 4,3,2,1
      for(let i=0;i < longitud;i++) {
        cadenafinal += (array[i] + caracter);
      }
      cadenafinal  = cadenafinal.slice(0, -1) 
      $input.value = `La cadena es: ${cadenafinal}`
    }

      PalabraOracion = () => {
        let $input      = document.getElementById('result');
        let respuest    = prompt('Ingrese la Frase');
        let palabra     = respuest.split(" ");
        let longitud    = palabra.length;
        let cadenaFinal = " ";
        if(respuest == ""){
           $input.value = `No se han ingredasado digitos`
        }else{
           for(let i = 0; i < longitud; i++){
              cadenaFinal += (palabra[i][0].toUpperCase() + palabra[i].slice(1) + " ");
           } 
           $input.value = `La Oracion es : ${cadenaFinal}`
        }
      }
      
      sumaDCadena() {
        let $input = document.getElementById('result');
        let numero = $input.value;
        let suma = func.sumCadena(numero);
        $input.value = `La suma del dígito ${numero} es: ${suma}`;
      }

    contarElementosEspeciales() {
        let separadores = [",", ".", ";", ":"];
        let cantidadSeparadores = {};
        let $input = document.getElementById("result");
        let cadena = $input.value;
        for (let i = 0; i < separadores.length; i++) {
          let separador = separadores[i];
          let elementos = func.spliter(cadena,separador);
          cantidadSeparadores[separador] = elementos.length - 1;
        }
        let resultado = "Resultado: {";
        for (let separador in cantidadSeparadores) {
          resultado += `"${separador}"=${cantidadSeparadores[separador]}, `;
        }
        resultado = resultado.slice() + "}";
        $input.value = `${cadena} ==> ${resultado}`
      }
    
    cadenaArreglo(){
        let $input = document.getElementById("result")
        let cadena = $input.value
        let elemento=""
        let separador = prompt("Ingrese un carácter separador");
       
        let arreglo=[]
        for(let i=0;i<cadena.length;i++){
          if(cadena[i]!=separador){
            elemento += cadena[i]
          }else{
            arreglo.push(elemento)
            elemento=""
          }
        }
        arreglo.push(elemento)
        $input.value = "El arreglo resultante es: " + "[" + arreglo + "]"
    }  

    eliminarElementoArreglo() {
        let $input = document.getElementById("result");
        let cadena = $input.value;
        let arreglo = func.spliter(cadena,";");
        let posicion = prompt("Ingrese posición del elemento a eliminar");
        arreglo.splice(posicion, 1);
        $input.value = `[Arreglo inicial=${cadena}] ==> Arreglo nuevo=${arreglo}`;
      }

      insertarElementoArreglo() {
        let $input = document.getElementById("result");
        let cadena = $input.value;
        let arreglo = func.spliter(cadena,";");
        let nuevo = prompt("Ingrese el nuevo elemento");
        let posicion = 0;
        while (posicion < arreglo.length && nuevo > arreglo[posicion]) {
          posicion++;
        }
        arreglo.splice(posicion, 0, nuevo);
        $input.value = `[Arreglo inicial=${cadena}] ==> Arreglo nuevo=${arreglo}`;
      }

    NumeroRomano = () => {
        let $input = document.getElementById('result');
        let valores = [90, 50, 40, 10, 9, 5, 4, 1];
        let numeroRomanos = ['XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
        let valorGuardado = $input.value
        let num = $input.value;
        let result = "";
        if($input.value === ""){
           $input.value = `No se han ingredasado digitos`
        }else
        if(isNaN(num)== false){
           valores.forEach((valores, i) => {
               while( num >= valores){
                   result = result + numeroRomanos[i];
                   num    = num - valores;
               }
           })
           console.log(num)
           console.log(result)
           $input.value = `El numero ${valorGuardado} a Romano es ${result}`
        }else{
           $input.value=`ERROR, se ha ingresado letras`
        }

    }

    MayorArreglo(){
        let $input=document.getElementById("result");
        let cadena = $input.value;
        let numeros = func.spliter(cadena,";").map(Number);
        let mayor = numeros[0];
        for (let i = 1; i < numeros.length; i++) {
          if (numeros[i] > mayor) {
            mayor = numeros[i];
          }
        }
          $input.value=`El elemento mayor del arreglo es: ${mayor}`
    }

    MenorArreglo(){
        let $input=document.getElementById("result");
        let cadena = $input.value;
        let numeros = func.spliter(cadena,";").map(Number);
        let menor = numeros[0];
        for (let i = 1; i < numeros.length; i++) {
          if (numeros[i] < menor) {
            menor = numeros[i];
          }
        }
          $input.value=`El elemento menor del arreglo es: ${menor}`
    }

    buscaArreglo(){
        let $input=document.getElementById("result")
        let cadena = $input.value
        let arreglo = func.spliter(cadena,";")
        console.log($input)
        console.log(cadena)
        console.log(arreglo)
        let buscado=prompt("Ingrese dato a buscar")
        let pos = func.isBuscado(arreglo,buscado)
        if (pos >= 0){
            $input.value=`[${arreglo}] - ${buscado} se encuentra en la posicion: ${pos}`
        }else{
            $input.value=`[${arreglo}] - ${buscado} no se encuentra en el arreglo`
        }
        
    }
    
    buscar_cadena() {
      let $input = document.getElementById("result");
      let cadena = $input.value.toLowerCase()
      let subcadena = prompt("Ingrese la subcadena a encontrar").toLowerCase()
      let encontrado = false;
      for (let i = 0; i <= cadena.length - subcadena.length; i++) {
        let c = 0;
        encontrado = true;
        while (c < subcadena.length && encontrado) {
          if (cadena[i + c] !== subcadena[c]) {
            encontrado = false;
          }
          c++;
        }
        if (encontrado) {
          $input.value=`La subcadena comienza en la posición ${i}`
          return;
        }
      }
      $input.value=`La subcadena no se encuentra en la cadena`
    }

    BaseN_N() {
      let $input = document.getElementById("result");
      let numero = $input.value;
      let baseInicial = prompt("Ingrese la base inicial")
      let baseFinal = prompt("Ingrese la base a transformar")
      
      // Primero, se convierte a base 10
      let base10 = 0;
      let exponente = 0;
      for (let i = numero.length - 1; i >= 0; i--) {
        let digito = parseInt(numero[i], baseInicial);
        base10 += digito * func.isExponente(baseInicial, exponente);
        exponente++;
      }
  
      // Luego, se convierte a la base final
      let arreglo = func.isDigitos(base10, baseFinal);
      let baseFinalStr = "";
      let hexa = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F",];
      for (let i = arreglo.length - 1; i >= 0; i--) {
        baseFinalStr = baseFinalStr + hexa[arreglo[i]];
      }
      
      $input.value = `[Base${baseInicial}=${numero}] ==> Base${baseFinal}=${baseFinalStr}`;
    }

}

class funciones{
  
    isBuscado(arr,buscar){
        let pos=0,enc=0
        //[2,4,6]  4
        while(pos<arr.length && enc==0){
            if (arr[pos]==buscar){
               enc=1
            }else{
                pos+=1
            }
        }
        if (enc == 1){
            return pos
        }else{
            return -1
        }
    }

    sumCadena(numero) {
      let suma = 0;
      let digito = 0
      for (let i = 0; i < numero.length; i++) {
        digito = parseInt(numero[i]);
        suma += digito;
      }
      return suma;
    }

    spliter(cadena, separador) {
      let resultado = [];
      let elemento = "";
      for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] === separador) {
          resultado.push(elemento);
          elemento = "";
        } else {
          elemento += cadena[i];
        }
      }
      resultado.push(elemento);
      return resultado;
    }

    isExponente(base,exp){
      let res = 1
      for(let i=1;i<=exp;i++){
          res*=base
      }
      return res
    }
     
    isDigitos(numero,base){
      let  digitos= []
      while(numero > 0){
          digitos.push(numero%base)
          numero = parseInt(numero/base)
      }
      return digitos
    }
}

let cal = new calculadora()
let func = new funciones()


