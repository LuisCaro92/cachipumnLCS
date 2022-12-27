let jugadorA = prompt("Jugador A");
 let jugadorB = prompt("Jugador B");

if (jugadorA == "piedra" && jugadorB == "tijeras") {
  console.log("Piedra gana a tijeras, gana jugador: " + jugadorA);
} else if (jugadorA == "piedra" && jugadorB == "papel") {
  console.log("Papel gana a piedra, gana jugador: " + jugadorB);
} else if (jugadorA == "tijeras" && jugadorB == "piedra") {
  console.log("Piedra gana a tijeras, gana jugador:" + jugadorB);
} else if (jugadorA == "papel" && jugadorB == "piedra") {
  console.log("Papel gana a piedra, gana jugador:" + jugadorA);
} else if (jugadorA == "tijeras" && jugadorB == "papel") {
  console.log("Tijeras gana a papel, gana jugador:" + jugadorA);
} else if (jugadorA == "papel" && jugadorB == "tijeras") {
  console.log("Tijeras gana a papel, gana jugador:" + jugadorB);
} else if (jugadorA == jugadorB) {
  console.log("Empate");
}