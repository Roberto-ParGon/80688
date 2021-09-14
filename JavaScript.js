//Declaramos variables
var primerOp;
var segundaOp;
var operacion;

function init(){
    //variables
    var resultado2 = document.getElementById("resultado2");
    var resultado = document.getElementById("resultado");
    var siete = document.getElementById('siete');
    var ocho = document.getElementById('ocho');
    var nueve = document.getElementById('nueve');
    var borrar = document.getElementById("borrar");
    var cuatro = document.getElementById('cuatro');
    var cinco = document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var multiplicacion = document.getElementById('multi');
    var uno = document.getElementById('uno');
    var dos = document.getElementById('dos');
    var tres = document.getElementById('tres');
    var division = document.getElementById('division');
    var cero = document.getElementById('cero');
    var resta = document.getElementById('menos');
    var suma = document.getElementById("mas");
    var igual = document.getElementById('igual');

  }
  //Botones
uno.onclick = function(e){
    resultado.textContent = resultado.textContent  + "1";
}
dos.onclick = function(e){
    resultado.textContent = resultado.textContent  + "2";
}
tres.onclick = function(e){
    resultado.textContent = resultado.textContent  + "3";
}
cuatro.onclick = function(e){
    resultado.textContent = resultado.textContent  + "4";
}
cinco.onclick = function(e){
    resultado.textContent = resultado.textContent  + "5";
}
seis.onclick = function(e){
    resultado.textContent = resultado.textContent  + "6";
}
siete.onclick = function(e){
    resultado.textContent = resultado.textContent  + "7";
}
ocho.onclick = function(e){
    resultado.textContent = resultado.textContent  + "8";
}
nueve.onclick = function(e){
    resultado.textContent = resultado.textContent  + "9";
}
cero.onclick = function(e){
    resultado.textContent = resultado.textContent  + "0";
}

suma.onclick = function(e){
    resultado.textContent = resultado.textContent + " + ";
}

multiplicacion.onclick = function(e){
    resultado.textContent = resultado.textContent + " x ";
}

division.onclick = function(e){
    resultado.textContent = resultado.textContent + " / ";
}

resta.onclick = function(e){
    resultado.textContent = resultado.textContent + " - ";
}


//Operaciones
suma.onclick = function(e){
    resultado.textContent = resultado.textContent + "+";
    primerOp = resultado.textContent;
    operacion = "+";
    limpiar();
}

resta.onclick = function(){
    primerOp = resultado.textContent;
    operacion = "-";
    limpiar();
}
multiplicacion.onclick = function(e){
    primerOp = resultado.textContent;
    operacion = "x";
    limpiar();
}
division.onclick = function(e){
    primerOp = resultado.textContent;
    operacion = "/";
    limpiar();
}
igual.onclick = function(e){
    segundaOp = resultado2.textContent;
    resolver();
}

borrar.onclick = function(e){
    borrar();
}

function limpiar(){
    resultado.textContent = "";
  }

  function borrar(){
    resultado.textContent = "";
    operacion = "";
    primerOp = "";
    segundaOp = "";
   
  }
  function resolver(){
    var resul = 0;
    switch(operacion){
      case "+":
        resul = double(primerOp) + double(segundaOp);
        break;
  
      case "-":
          resul = double(primerOp) - double(segundaOp);
          break;
  
      case "x":
        resul = double(primerOp) * double(segundaOp);
        break;
  
      case "/":
        resul = double(primerOp) / double(segundaOp);
        break;
    }
  }