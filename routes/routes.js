const express = require('express');
const router = express.Router();

const controllerIniciarSesion = require('../controllers/iniciarSesionController');
const controllerRegister = require('../controllers/registroController');
const controllerReservar = require('../controllers/reservarController');


router.post('/iniciarsesion', controllerIniciarSesion);
router.post('/register', controllerRegister);
router.post('/reservar', controllerReservar);

module.exports = router;