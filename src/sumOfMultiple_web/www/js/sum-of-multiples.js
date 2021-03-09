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
 *
 */

/**
 * Given a number, calculates the sum of all the unique multiples 
 * of particular numbers up to but not including that number.
 * 
 * Numbers are asked via prompt
 */
function sum() {
  let inputNumberVector = prompt('Escriba el vector de numeros para comprobar si es multiplo el dividendo');
  let limitNumber = prompt('Escriba el numero limite');
  let totalSum = 0;
  for (let dividend = limitNumber - 1; dividend > 0; dividend--) {
    for (let vectorIndex = 0; vectorIndex < inputNumberVector.length; vectorIndex++) {
      if ((dividend % inputNumberVector[vectorIndex]) === 0) {
        totalSum += dividend;
        break;
      }
    }
  }
  alert(totalSum);
}
