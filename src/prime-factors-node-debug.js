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

//$ npm install debug

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
    number++;
    if (inputNumber % number === 0) {
      arrayPrimeFactors.push(number);
      inputNumber = inputNumber / number;
      number--;
    }
  }
  return arrayPrimeFactors;
};

console.log(`[${primeFactors(process.argv[2])}]`);
