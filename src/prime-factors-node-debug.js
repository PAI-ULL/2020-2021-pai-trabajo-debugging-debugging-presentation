/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Ángel Tornero Hernández
 * @author Gabriel García Jaubert
 * @date 07 mar 2021
 * @brief Prime factors exercism on JavaScript
 *
 */
'use strict';
//$ npm install debug
const debug = require('debug');
const DEBUG_WHILE = debug('while');
const DEBUG_IF = debug('if');
/**
 * Calculates the given number as a product of prime numbers
 * 
 * @param {number} inputNumber Number
 * @return {array} Returns a vector with the prime factors of the given number
 */
const primeFactors = (inputNumber) => {
  let arrayPrimeFactors = [];
  let number = 1;
  while (inputNumber !== 1) {
<<<<<<< HEAD
=======
    DEBUG_WHILE(`While loop ${inputNumber}`);
>>>>>>> entrega
    number++;
    if (inputNumber % number === 0) {
      DEBUG_IF(`If statement with ${number}`);
      arrayPrimeFactors.push(number);
      inputNumber = inputNumber / number;
      number--;
    }
  }
  return arrayPrimeFactors;
};
debugger;
console.log(`[${primeFactors(process.argv[2])}]`);
