// Lista Cognomi registrati
var surname = ["Bianchi", "Rossi", "Verdi", "Nesta", "Baresi", "Maldini"];

// Cognome User
var userSurname = "";

// Inserire cognome User nella Lista
while (userSurname == "") {
  userSurname = prompt ("Inserisci il tuo cognome")
  surname.push(userSurname);
  surname.sort();
}

// Output per User
alert("Il tuo cognome fa parte di questa lista: " + surname);
alert("Il tuo cognome è il numero " + (surname.indexOf(userSurname) + 1) + " su " + surname.length)
