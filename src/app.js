import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const palos = ["heart", "spade", "club", "diamond"];

  const valores = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "K", "Q", "J", "A"];


  const palosSimbolos = {

    heart: "♥",
    spade: "♠",
    club: "♣",
    diamond: "♦"

  };

  const randomPaloIndex = Math.floor(Math.random() * palos.length);
  const randomValorIndex = Math.floor(Math.random() * valores.length);

  const randomPalo = palos[randomPaloIndex];
  const randomValor = valores[randomValorIndex];

  const cartaContenedor = document.querySelector("#carta-contenedor");

  cartaContenedor.className = "carta " + randomPalo;

  document.querySelector(".carta-valor").textContent = randomValor;

  const simbolos = document.querySelectorAll(".carta-simbolo");

  simbolos.forEach(simbolo => {
    simbolo.textContent = palosSimbolos[randomPalo];
  });

  console.log(`Generar carta: ${randomValor} de ${randomPalo}es`);

};