
/*Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, 
stampa un messaggio appropriato sull’esito del controllo. La lista delle email accettate è:
matteo@gmail.com
fabio@gmail.com
pietro@gmail.com
anna@gmail.com

*/

let email = prompt("Inserisci email");
let addEmail;

let arrayEmail = ["matteo@gmail.com", "fabio@gmail.com", "pietro@gmail.com", "anna@gmail.com", ]



for(let i = 0; i<=arrayEmail.length; i++){
    if(arrayEmail[i]==email){
        i=arrayEmail.length;
        alert("Puoi accedere al contenuto");
        
    }else if(arrayEmail[i]!=email && i==arrayEmail.length){
         addEmail = prompt("Vuoi aggiungere questa email? Rispondi si per aggiungere, no per non aggiungere");
    }
    
    
}


if(addEmail == "si" ){
    arrayEmail.push(email)
}
for(let i =0; i<arrayEmail.length; i++){
    console.log(arrayEmail[i]);
}