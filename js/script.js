let question = prompt('Come ti chiami?');
let questionCognome= prompt ("Qual'è il tuo cognome");
let questionColore = prompt("Qual'è il tuo colore preferito");
const number = 21;

let mypassword = question + questionCognome + questionColore + number;

document.getElementById("password").innerHTML= mypassword;

