//Scrivi un programma che dato l’anno corrente e un anno di nascita determini:
// L’età della persona
// Quanti anni sono necessari per raggiungere i 100


let currentYear = 2023
let dataOfBirth = 1999

let myAge = currentYear - dataOfBirth
let missingYear = 100 - myAge

console.log('La mia età è ' + myAge)
console.log('Gli anni mancanti sono: ' + missingYear)