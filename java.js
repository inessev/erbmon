let nombre = prompt("Por favor, ingresa tu nombre:");
let nombreReverso = "";

for (let i = nombre.length - 1; i >= 0; i--) {
  nombreReverso += nombre[i];
}

alert("¡Adiós " + nombreReverso + "!");

