/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Ángel Tornero Hernández
 * @author Gabriel García Jaubert
 * @date 4 Mar 2021
 * @brief Syntax error example
 *
 */

/**
 * Calculates the obtained points from a dart throw based on the coordinates where the dart landed.
 * 
 * @param {number} coorX - X coordinate
 * @param {number} coorY - Y coordinate
 * @return {number} Returns the obtained points.
 */

const score = (coorX, coorY) => {
  let module = Math.sqrt(coorX * coorX + coorY * coorY);
  if (module <= 1 {         //syntax error                                                                          
    return 10;
  } 
  if (module <= 5) {
    return 5;
  }
  if (module <= 10) {
    return 1;
  }
  return 0;
};
