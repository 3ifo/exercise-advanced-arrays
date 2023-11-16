/* 1. Crea una funzione safeParseJSON che prende una stringa e tenta di analizzarla come JSON. Se l'analisi fallisce,la funzione dovrebbe restituire 
null invece di generare un errore. Inoltre, la funzione dovrebbe stampare in console se l'analisi è stata un successo o meno.*/

/*let stringa = '["Ciao", "Buonasera"]';

const safeParseJSON = (stringa) => {
  try {
    const stringaAnalizzata = JSON.parse(stringa);
    console.log("Complimenti");
    return stringaAnalizzata;
  } catch {
    console.log("Male");
    return null;
  }
};*/

//safeParseJSON(stringa);//

/* 2. Crea una funzione chiamata logElements che prende un array e stampa in console ogni elemento utilizzando il metodo .forEach().*/

const array = [1, 2, 3, 4, 5];

const logElements = (array) => {
  array.forEach((elem) => {
    console.log(elem);
  });
};

logElements(array);
