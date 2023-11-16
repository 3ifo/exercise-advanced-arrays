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

/* 2. Crea una funzione chiamata logElements che prende un array e stampa in console ogni elemento utilizzando il metodo .forEach().

const array = [1, 2, 3, 4, 5];

const logElements = (array) => {
  array.forEach((elem) => {
    console.log(elem);
  });
};

logElements(array);*/

/*3. Scrivi una funzione chiamata divide che prende due parametri, dividendo e divisore. Se il divisore è 0, genera un nuovo errore con 
il messaggio "Impossibile dividere per zero". Altrimenti, restituisci il risultato della divisione.
  if (divisore === 0) {
    throw new Error("Impossibile dividere per zero");
  }
  return dividendo / divisore;
};
try {
  console.log(divide(10, 0));
} catch (error) {
  console.error(error);
}*/

/*4. Scrivi una funzione processNumbers che prende un array, convalida che contenga solo numeri e restituisce un nuovo array con ogni numero elevato al quadrato. 
Se un elemento dell'array non è un numero, genera un errore indicando a quale indice si trova il valore non numerico.*/

const processNumbers = (array) => {
  let risultato = array.map((elem, i) => {
    if (typeof elem !== "number") {
      throw new Error(`L'elemento con indice ${i} non è un numero `);
    }
    return elem * elem;
  });
  return risultato;
};
