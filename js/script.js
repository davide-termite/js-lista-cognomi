// Lista Cognomi registrati
var surname = ["Bianchi", "Rossi", "Verdi", "Nesta", "Baresi", "Maldini"];

// Cognome User
var userSurname = "";

// Inserire cognome User nella Lista
do {
  userSurname = prompt ("Inserisci il tuo cognome");
} while ((!isNaN(userSurname)) || (userSurname === "")) {
  var userUppercase = userSurname.toUpperCase()
  surname.push(userUppercase);
  surname.sort();
}

// Output per User
alert("Il tuo cognome fa parte di questa lista: " + surname);
alert("Il tuo cognome è il numero " + (surname.indexOf(userUppercase) + 1) + " su " + surname.length)
