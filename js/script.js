let nome = prompt('Come ti chiami?');
let cognome= prompt ("Qual'è il tuo cognome");
let colore = prompt("Qual'è il tuo colore preferito");
const number = 21;

let mypassword = nome + cognome + colore + number;

document.getElementById("password").innerHTML= mypassword;

