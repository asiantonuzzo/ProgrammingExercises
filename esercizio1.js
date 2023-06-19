//Scrivi un programma che dati quattro numeri, restituisca in output il maggiore e il minore. 

let numbers = [3, -1, 4, -2];
//console.log(Math.max(...numbers));
//console.log(Math.min(...numbers));

console.log('Il numero maggiore è = ' + Math.max(...numbers));
console.log('Il numero minore è = ' + Math.min(...numbers));

// Perché Math.Max si aspetta come input che ogni parametro sia un numero. Passandogli direttamente l'array vede un parametro solo che è di tipo array, quindi non valido. 
//Se usi i puntini espandi l'array ed è come se prendessi i singoli elementi dell'array e li passassi come argomenti al metodo Math.max()