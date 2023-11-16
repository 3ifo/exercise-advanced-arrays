/* 1. Crea una funzione safeParseJSON che prende una stringa e tenta di analizzarla come JSON. Se l'analisi fallisce,la funzione dovrebbe restituire 
null invece di generare un errore. Inoltre, la funzione dovrebbe stampare in console se l'analisi è stata un successo o meno.*/

let stringa = '["Ciao", "Buonasera"]';

const safeParseJSON = (stringa) => {
  try {
    const stringaAnalizzata = JSON.parse(stringa);
    console.log("Complimenti");
    return stringaAnalizzata;
  } catch {
    console.log("Male");
    return null;
  }
};

safeParseJSON(stringa);
