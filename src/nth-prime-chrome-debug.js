/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación Aplicaciones Interactivas
 *
 * @author Ángel Tornero Hernández
 * @author Gabriel García Jaubert
 * @date 07 Mar 2021
 * @brief Code for Exercism's challenge "Nth-prime"
 */

/**
 * Calculates the nth prime number. 
 * 
 * @param {number} nPosition Position of the wanted prime number to calculate.
 * @return {number} Return the corresponding number.
 */
const prime = (nPosition) => {
  if (nPosition === 0) {
    throw new Error('there is no zeroth prime');
  }
  let primeCounter = 0;
  let checkingNumber = 1;
  let prime = false;
  while (primeCounter < nPosition) {
    prime = true;
    checkingNumber++;
    for(let i = 2; i <= checkingNumber / 2; i++)
    {
      if ((checkingNumber % i) === 0) {
        prime = false;
        break;
      }
    }
    if (prime) {
      primeCounter++;
    }
  }
  return checkingNumber;
};

console.log(prime(process.argv[2]));
