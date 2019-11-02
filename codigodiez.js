function activarfuncion()
{
var texto;
var diccionario = document.getElementById("textoIngresado").value;
switch (diccionario) {
  case "casa":
  text = "es una edificación destinada para ser habitada.";
  break;

  case "habitacion":
  text = "es una parte de la edificación destinada para ser habitada por personitas.";
  break;

  case "baño":
  text = "es una habitacion destinada para ser las necesidades biologicas.";
  break;

  default:
  text = "Palabra mal escrita o no esta en la base de datos";
}
document.getElementById("demo").innerHTML = text;
}
