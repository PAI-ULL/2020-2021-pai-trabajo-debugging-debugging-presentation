/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Ángel Tornero Hernández
 * @author Gabriel García Jaubert
 * @date 4 Mar 2021
 * @brief Logic error example
 *
 */

/**
 * Outputs to the console the multiplication tables from 1 to 10
 * 
 */

const multiplicationTables = () => {
  for (let i = 1; i <= 10; i++) {
    console.log(`Tabla del ${i}`);
    for (let j = 1; j <= 10; i++) {
      console.log(`${i} * ${j} = ${i * j}`)
    }
  }
}

multiplicationTables();
