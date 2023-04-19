let nombre = prompt("¿Cuál es tu nombre?");
let nombreAlReves = "";
for(let i = nombre.length - 1; i >= 0; i--){
  nombreAlReves += nombre[i];
}
alert("¡Adiós " + nombreAlReves + "!");