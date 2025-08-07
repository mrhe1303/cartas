window.onload = function() {
  
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

  const cartaContenedor = document.querySelector(".carta");

  cartaContenedor.className = "carta " + randomPalo;

  document.querySelector(".numero").textContent = randomValor;

  document.querySelector(".simbolo1").textContent = palosSimbolos[randomPalo];
  document.querySelector(".simbolo2").textContent = palosSimbolos[randomPalo];

  console.log(`Generar carta: ${randomValor} de ${randomPalo}es`);

};
