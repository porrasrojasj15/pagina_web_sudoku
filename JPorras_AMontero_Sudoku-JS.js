//Variables:
var solucion4x4 = [3,2,4,1,4,1,3,2,2,4,1,3,1,3,2,4];
var solucion9x9 = [5,3,4,6,7,8,9,1,2,6,7,2,1,9,5,3,4,8,1,9,8,3,4,2,5,6,7,8,5,9,7,6,1,4,2,3,4,2,6,8,5,3,7,9,1,7,1,3,9,2,4,8,5,6,9,6,1,5,3,7,2,8,4,2,8,7,4,1,9,6,3,5,1,4,5,2,8,6,1,7,9];


//Funciones:
function desplegar() {
  var sudokus = document.getElementsByClassName("sudoku");
  var i;
  for (i = 0; i < sudokus.length; i++) {
      sudokus[i].hidden = false;
    }
  /*getElementsByClassName retorna una lista con todos los elementos de clase
  sudoku, que se encontraban ocultos, esta función recorre esa lista y los muestra*/
}

function revisar4x4(){
  var matriz = document.getElementsByTagName("INPUT");
  var i;
  var fallos = 0;
  var respuesta = [];
  for (i = 0; i < matriz.length; i++) {
      respuesta[i] = matriz[i].value;
    }
  matriz = []; //vacía matriz, solo para no dejar la variable ahí
  for (i = 0; i < respuesta.length; i++) {
      if(respuesta[i] != solucion4x4[i]){
        fallos++;
      }
    }
  if(fallos > 0){
    var respuestaSistema;
    respuestaSistema = "Su respuesta es incorrecta. <br> Contiene ";
    respuestaSistema += fallos;
    respuestaSistema += " fallo(s). <br> Intente de nuevo";
    document.getElementById("respuestaSistema4x4").innerHTML = respuestaSistema;
    document.getElementById("respuestaSistema4x4").style.color = "#b81c2d";
  }
  else{
    document.getElementById("respuestaSistema4x4").innerHTML = "Su respuesta es correcta ¡Felicidades!";
    document.getElementById("respuestaSistema4x4").style.color = "#138416";
  }
  /*getElementsByTagName retorna una lista con todos los inputs del documento,
  esta función los aloca en la variable respuesta y luego lo compara con solucion4x4.
  Como getElementsByTagName aloca las respuestas de manera seguida en un solo vector
  y como se está comparando méramente la igualdad de estas, no es necesario separarlas
  en una matriz real, esta separación es méramente estética y hecha en el html*/
}

function revisar9x9(){
  var matriz = document.getElementsByTagName("INPUT");
  var i;
  var fallos = 0;
  var respuesta = [];
  for (i = 0; i < matriz.length; i++) {
      respuesta[i] = matriz[i].value;
    }
  for (i = 0; i < respuesta.length; i++) {
      if(respuesta[i] != solucion9x9[i]){
        fallos++;
      }
    }
  if(fallos > 0){
    var respuestaSistema;
    respuestaSistema = "Su respuesta es incorrecta. <br> Contiene ";
    respuestaSistema += fallos;
    respuestaSistema += " fallo(s). <br> Intente de nuevo";
    document.getElementById("respuestaSistema9x9").innerHTML = respuestaSistema;
    document.getElementById("respuestaSistema9x9").style.color = "#b81c2d";
  }
  else{
    document.getElementById("respuestaSistema9x9").innerHTML = "Su respuesta es correcta ¡Felicidades!";
    document.getElementById("respuestaSistema9x9").style.color = "#138416";
  }
  /*getElementsByTagName retorna una lista con todos los inputs del documento,
  esta función los aloca en la variable respuesta y luego lo compara con solucion9x9.
  Como getElementsByTagName aloca las respuestas de manera seguida en un solo vector
  y como se está comparando méramente la igualdad de estas, no es necesario separarlas
  en una matriz real, esta separación es méramente estética y hecha en el html*/
}
