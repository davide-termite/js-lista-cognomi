// Lista Cognomi registrati
var surname = ["Bianchi", "Rossi", "Verdi", "Nesta", "Baresi", "Maldini"];

// Cognome User
var userSurname = "";

// DOM
var output = document.getElementById('output');
var outputPosition = document.getElementById('outputPosition');

// Inserire cognome User nella Lista
do {
  userSurname = prompt ("Inserisci il tuo cognome");
} while ((!isNaN(userSurname)) || (userSurname === ""))

// Cognome User inserito in Array
var userUppercase = userSurname.toUpperCase()
surname.push(userUppercase);
surname.sort();

// Output per User
output.innerHTML = "Il tuo cognome fa parte di questa lista: " + surname;
outputPosition.innerHTML = "Il tuo cognome è il numero " + (surname.indexOf(userUppercase) + 1) + " su " + surname.length;
