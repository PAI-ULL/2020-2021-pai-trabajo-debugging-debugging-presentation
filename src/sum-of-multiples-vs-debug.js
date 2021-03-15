/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación Aplicaciones Interactivas
 *
 * @author Ángel Tornero Hernández
 * @author Gabriel García Jaubert
 * @date 07 Mar 2021
 * @brief Code for Exercism's challenge "Sum of Multiples"
 */
'use strict';
/**
 * Given a number, calculates the sum of all the unique multiples 
 * of particular numbers up to but not including that number.
 * 
 * @param {array} inputNumberVector All numbers we calculate must 
 * be multiples of this numbers on the array.
 *
 * @return {number} Return the corresponding sum.
 */
const sum = (inputNumberVector, limitNumber) => {
  let totalSum = 0;
  for (let dividend = limitNumber - 1; dividend > 0; dividend--) {
    for (let vectorIndex = 0; vectorIndex < inputNumberVector.length; vectorIndex++) {
      if ((dividend % inputNumberVector[vectorIndex]) === 0) {
        totalSum += dividend;
        break;
      }
    }
  }
  return totalSum;
};

console.log(sum(process.argv[2], process.argv[3]));
