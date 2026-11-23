

const cofre = document.querySelector('.cofre');


function getRandomInt() {
  min = Math.ceil(1);
  max = Math.floor(50);
  return Math.floor(Math.random() * (50 - 1) + 1);
}

var num = document.getElementById("quantity").value;
var result ;

if ( num == getRandomInt() ) {
    alert ("! Certo !")
    cofre.src = 'Imagens/Cofre aberto.png';
}
else {
    msg.textContent = "! Tente novamente !";
}

if ( num < getRandomInt() ) {
    msg.textContent = "Escolha um número maior . . .";
}
else {
    if ( num > getRandomInt() ) {
    msg.textContent = "Escolha um número menor . . .";
}}
