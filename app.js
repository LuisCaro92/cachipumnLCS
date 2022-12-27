
let ganaA = 0;
let ganaB = 0;
let empateAB = 0;
let respuesta


do {

  let jugadorA = prompt("Jugador A");
  let jugadorB = prompt("Jugador B");
  if (jugadorA == "piedra" && jugadorB == "tijeras") {
    ganaA++
    console.log("Piedra gana a tijeras, gana jugador: " + jugadorA);
  } else if (jugadorA == "piedra" && jugadorB == "papel") {
    ganaB++
    console.log("Papel gana a piedra, gana jugador: " + jugadorB);
  } else if (jugadorA == "tijeras" && jugadorB == "piedra") {
    ganaB++
    console.log("Piedra gana a tijeras, gana jugador:" + jugadorB);
  } else if (jugadorA == "papel" && jugadorB == "piedra") {
    ganaB++
    console.log("Papel gana a piedra, gana jugador:" + jugadorA);
  } else if (jugadorA == "tijeras" && jugadorB == "papel") {
    ganaA++
    console.log("Tijeras gana a papel, gana jugador:" + jugadorA);
  } else if (jugadorA == "papel" && jugadorB == "tijeras") {
    ganaB++
    console.log("Tijeras gana a papel, gana jugador:" + jugadorB);
  } else if (jugadorA == jugadorB) {
    empateAB++
    console.log("Empate");
  }


  
  respuesta = confirm("seguir jugando?")
} while (respuesta)


document.getElementById("ganaA").innerHTML = "Veces ganadas jugador A:" + ganaA;
document.getElementById("ganaB").innerHTML = "Veces ganadas jugador B:" + ganaB;
document.getElementById("empateAB").innerHTML = "Empates :" + empateAB;


/*
  console.log("veces ganadas jugador A :", + ganaA);
  console.log("veces ganadas jugador B :", + ganaB);
  console.log("veces empatadas", + empateAB)
*/