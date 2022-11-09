//almacenar respuestas correctas en el vector
var respuestaCorrecta = [
  "a3",
  "b2",
  "c1",
  "d3",
  "e1",
  "f3",
  "g2",
  "h2",
  "i3",
  "j3",
];
//variables para mostrar respuestas correctas
var bien = "✅";
var mal = "❌";
//almacenar varibales de respuestas correctas
var imagenes = new Array();
function comprobarRadio(vector) {
  //variables del total de respuestas
  var respuestasBuenas = 0;
  var respuestasMalas = 0;
  //recorre el vector de las respuestas correctas
  for (j = 0; j < vector.length; j++) {
    //almacena el contenido de los radio buttons seleccionados
    var radios = document.getElementsByName(j + 1);
    //recorre la variable radios
    for (i = 0; i < radios.length; i++) {
      //condicional para continuar con los radios seleccionados
      if (radios[i].checked) {
        //guarda el valor de los radios
        var valor = radios[i].value;
        //si el valor es igual a las respuestas correctas
        if (valor == vector[j]) {
          //incrementa respuestas correctas
          imagenes[j] = bien;
          respuestasBuenas++;
        } else {
          //incrementa repsuestas incorrectas
          imagenes[j] = mal;
          respuestasMalas++;
        }
      }
    }
  }
  //recorre el arreglo donde se almaceno los emojis
  for (x = 0; x < imagenes.length; x++) {
    //si radios es igual a respuestas correctas
    if (radios[i] == vector[j]) {
      //muestra valor de emoji correcto
      document.getElementById(x + 1).innerHTML = imagenes[x];
    } else {
      //muestra valor de emoji incorrecto
      document.getElementById(x + 1).innerHTML = imagenes[x];
    }
  }
  //calcula el promedio de el formulario
  promedio = Math.round((respuestasBuenas * 100) / 10);
  //si el promedio es menor o igual a 70
  if (promedio >= 70) {
    alert("Aprobaste con un " + promedio + "%");
  } else {
    alert("Reprobaste");
  }
  //si el promedio es mayor o igual a 90
  if (promedio >= 90) {
    alert("Obtuviste beca");
  }
  //imprime los resultados obtenidos respuestas correctas e incorrectas
  document.getElementById("resultados").innerHTML =
    "Score:" +
    " " +
    promedio +
    "<br>" +
    " Correct answers" +
    " " +
    "<b>" +
    respuestasBuenas +
    "</b>" +
    "</br>" +
    "   wrong answers" +
    " " +
    respuestasMalas;
}
