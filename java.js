alert ("Escriba dos números para obtener el resultado de su suma, resta, multiplicación y división");
var name1;
name1 = parseInt(prompt('Escriba aquí su nombre'));
let nombreAlReves = "";

for (let i = nombre.length - 1; i >= 0; i--) {
  nombreAlReves += name1[i];
}

alert("¡Adiós " + nombreAlReves + "!" );

