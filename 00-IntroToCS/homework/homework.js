"use strict";

function BinarioADecimal(num) {
  // tu codigo aca
  // algo
  let aux = num.split("").reverse()
  let acumulador = 0;
  for (let i = 0; i< aux.length; i++){
      if(aux[i] != 0){
        acumulador = acumulador + aux[i] * Math.pow(2,i)
      }
    }
  return acumulador;
}

function DecimalABinario(num) {
  // tu codigo aca
  let aux = "";
  
  while(num > 0){
    aux = num % 2 + aux;
    num = Math.floor(num / 2);
  }
  return aux;
}
// No se pueden usar: 
// parseInt
// toString



module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
