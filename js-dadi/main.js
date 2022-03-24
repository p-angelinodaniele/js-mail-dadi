/*


Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.




*/



let computer=Math.floor(Math.random()*6+1);
let giocatore=Math.floor(Math.random()*6+1);

console.log("il numero del computer è " + computer);
console.log("il numero del giocatore è " + giocatore);

if(computer < giocatore){
    alert("Ha vinto il giocatore");
}else if(computer > giocatore){
    alert("Ha vinto il computer");
}else{
    alert("Avete pareggiato");
}



