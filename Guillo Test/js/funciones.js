function iniciar() {
  if (!document.formulario1.nombre.value.length) {
    alert("Por favor ingrese su nombre completo");
  } else {
    var nuevo_titulo = document.getElementById("texto").value;
    document.getElementById("usuario").innerHTML =
      "Presentado por: " + nuevo_titulo;
    document.getElementById("login").style.display = "none";
    document.getElementById("imagen").style.display = "none";
    document.getElementById("pregunta_1").style.display = "block";
    document.getElementById("tarjeta").style.display = "block";
    document.getElementById("fin__tarjeta").style.display = "block";
    document.getElementById("barra").style.display = "block";
  }
}
function inic() {
  document.getElementById("login").style.display = "block";
  document.getElementById("imagen").style.display = "block";
  document.getElementById("pregunta_1").style.display = "none";
  document.getElementById("tarjeta").style.display = "none";
  document.getElementById("fin__tarjeta").style.display = "none";
  document.getElementById("barra").style.display = "none";
}

var preguntas = [
  "¿Capital de Brasil?",
  "¿Capital de FRANCIA?",
  "¿Capital de Egipto?",
  "¿Capital de Colombia?",
  "¿Capital de Japon?",
  "¿Capital de Perú?",
  "¿Capital de Ecuador?",
  "¿Capital de Venezuela?",
  "¿Capital de de ESPAÑA?",
  "¿Capital de Cuba?",
];
var respuestas = [
  ["Brasilia OK", 
  "Sao Paulo", 
  "Manaos", 
  "Rio de Janeiro"],

  ["Paris:", 
  "Niza", 
  "Monaco", 
  "Dantes"],

  [
    "El Cairo OK",
    "Alejandria",
    "Sudan",
    "Etiopia",],
  
  [
    "Bogota OK",
    "Medellin",
    "Montería",
    "Cali",],
    
  ["Tokyo OK", 
  "Kyoto", 
  "Pekin", 
  "Taiwan"],

  ["Lima OK", 
  "Cusco", 
  "Arequipa", 
  "Amazonas"],

  ["Quito OK", 
  "Guayaquil", 
  "Pasto", 
  "Popayan"],

  ["Caracas OK", 
  "Zulia", 
  "Maracaná", 
  "Venecolandia"],

  ["Buenos Aires 2", 
  "Buenos Aires 3", 
  "Buenos Aires", 
  "Buenos Aires 4"],

  ["La Habana OK", 
  "Panzenú", 
  "Paraguay", 
  "Deibis Rodriguez"],

];

jugar();

var indicie_respuesta_correcta;

function jugar() {
  var contadora = 0;

  var indice_aleatorio = Math.floor(Math.random() * preguntas.length);

  var respuestas_posibles = respuestas[indice_aleatorio];

  var posiciones = [0, 1, 2, 3];
  var respuestas_reordenadas = [];

  var ya_esta = false;
  for (i in respuestas_posibles) {
    var posicion_aleatoria = Math.floor(Math.random() * posiciones.length);
    if (posicion_aleatoria == 0 && ya_esta == false) {
      indicie_respuesta_correcta = i;
      ya_esta = true;
    }
    respuestas_reordenadas[i] =
      respuestas_posibles[posiciones[posicion_aleatoria]];
    posiciones.splice(posicion_aleatoria, 1);
  }

  var txt_respuestas = "";
  for (i in respuestas_reordenadas) {
    txt_respuestas +=
      '<div id="mmm"><input type="radio" name="pp" value="' +
      i +
      '"><label>' +
      respuestas_reordenadas[i] +
      "</label><br></div>";
  }

  document.getElementById("respuestas").innerHTML = txt_respuestas;
  document.getElementById("pregunta").innerHTML = preguntas[indice_aleatorio];

  if (contadora > 9) {
    document.getElementById("botones").style.display = "none";
  }
}

var contestadas = [];
var contadora = 0;
var res_correctas = 0;
var res_incorrectas = 0;
function comprobar() {
  if (contadora > 10) {
    alert("se acabaron las preguntas");
  }
  var respuesta = $("input[type=radio]:checked").val();

  if (respuesta == indicie_respuesta_correcta) {
    contestadas[contadora] = true;
    res_correctas++;

  } else {
    contestadas[contadora] = false;
    res_incorrectas++;

  }
  contadora++;
  document.getElementById("bar").value = contadora * 10;
  document.getElementById("p" + contadora).style.backgroundColor = "#808080";
  jugar();
}

function calificar() {
  if (contadora < 10) {
    alert("aun no haz contestado todas");
  } else {
    document.getElementById("botones").style.display = "none";

    document.getElementById("finalizar").style.display = "none";

    var txt_resp = "";
    txt_resp +=
      '<div id="este_no_es"><div id="mmmm">Respuestas correctas    ' +
      res_correctas +
      '<br></div><div id="mmmm">Respuestas incorectas    ' +
      res_incorrectas +
      '<br></div><div id="mmmm">Total respuestas    ' +
      contadora +
      "<br></div> Aprobó </div>"
      +
      "<br></div></div>";

    document.getElementById("fin__tarjeta").innerHTML = txt_resp;

    var k = 0;
    for (i in contestadas) {
      k++;
      if (contestadas[i] == true) {
        document.getElementById("p" + k).style.backgroundColor = "#00bb2d";
      }
      if (contestadas[i] == false) {
        document.getElementById("p" + k).style.backgroundColor = "#Ff0000";
      }
    }
  }
}
