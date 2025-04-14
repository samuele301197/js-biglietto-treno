// CONSEGNA

// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
  // il prezzo del biglietto è definito in base ai km (0.21 € al km)
  // va applicato uno sconto del 20% per i minorenni
  // va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va stampato in forma umana (con massimo due decimali,  per indicare centesimi sul prezzo).


//  DATI IN POSSESSO:
  // Prezzo biglietto: 0,21 euro al KM
  // Sconto per minorenni: 20%
  // Sconto per over 65: 40%



// Sulla base del prezzo iniziale del biglietto, chiederò al viaggiatore il numero di KM da percorrere per questo viaggio, in modo da poter moltiplicare questi due elementi.
// La mia seconda operazione sarà chiedere l'età del viaggiatore, ed in base alla risposta applicherò ,o meno, lo sconto necessario: 
  // se minorenne, sconto del 20%;
  // se over 65, sconto del 40%;
  // se rientra nella fascia tra 18 e 65, non vi sarà applicato alcuno sconto.



  const price = (0,21)
  // * console .log (price)

  



const numberKm = prompt("Quanti chilometri percorrerai?")
  console .log = (numberKm)

const userAge = prompt("Quanti anni hai?")
console .log = (userAge)



const underDiscount = ((price * numberKm) * 20) / 100
// * console .log = (underDiscount)

const overDiscount = ((price * numberKm) * 40) / 100
// * console .log = (overDiscount)

const firstData = price * numberKm
// * console .log = (firstData)




if (userAge < 19) {
    console .log = ((price * numberKm) / underDiscount)
} else if (userAge > 64) {
    console .log = ((price * numberKm) / overDiscount)
} if (userAge > 18) {
    console .log (firstData)
} else if (userAge < 65) {
    console .log = (firstData)
}








