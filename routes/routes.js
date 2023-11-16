const express = require('express');
const router = express.Router();

const controllerIniciarSesion = require('../controllers/iniciarSesionController');
const controllerRegister = require('../controllers/registroController');


router.post('/iniciarsesion', controllerIniciarSesion);
router.post('/register', controllerRegister);

module.exports = router;