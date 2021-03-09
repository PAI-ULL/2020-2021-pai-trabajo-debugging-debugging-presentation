/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación Aplicaciones Interactivas
 *
 * @author Ángel Tornero Hernández
 * @author Gabriel García Jaubert
 * @date 07 Mar 2021
 * @brief Code for creating the web werver
 *
 */
const EXPRESS = require('express');
const PATH = require('path');
const APP = EXPRESS();

//set the port
APP.set('port', 8089);

//tell express that we want to use the www folder
//for our static assets
APP.use(EXPRESS.static(PATH.join(__dirname, '../www')));

// Listen for requests
const SERVER = APP.listen(APP.get('port'), '0.0.0.0', function () {
  console.log('The server is running on http://<your machine IP addr>:' + APP.get('port'));
});
