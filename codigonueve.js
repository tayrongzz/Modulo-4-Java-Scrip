//SWITCH

switch (expression) {
  case valor:
    break;

  case valor2:
    break;

  default:
}

var estacion = prompt("¿Cual es tu estacion del año preferida?");
switch (estacion) {
  case "primavera":
   console.log("La primavera");
     break;
  case "verano":
   console.log("El verano");
     break;
  case "otoño":
   console.log("El otoño");
     break;
  case "invierno":
   console.log("El invierno");
     break;

  default:
console.log("No es una estacion del año");
}

var mes = Number(prompt("introduce el numero del mes: "));
switch (mes) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
  console.log("Este mes tiene 31 dias.");
  break;
  case 4:
  case 6:
  case 9:
  case 11:
  console.log("Este mes tiene 30 dias.");
  break;
  case 2:
  console.log("Este mes tiene 28 dias.");
  break;
  default:
  console.log("No has elegido un mes del 1 al 12");
}
