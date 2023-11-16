const db = require('../database/databaseconfig')
const session = require('express-session');
// const bcrypt = require('bcrypt');
// const saltRounds = 10;

async function Registro(req, res){
    try {
        const {username, password} = req.body;

	if (username && password) {
		db.query('INSERT INTO users(username, password) VALUES(?, ?)', [username, password], (error, results) => {
			if (error) throw error;

			if (results) {
				session.loggedin = true;
				session.username = username;
				res.send(true);
				console.log('Usuario creado exitosamente.');
			}
			else {
				res.send('No se pudo crear el usuario.');
				console.log('No se pudo crear el usuario, error de la base de datos.');
			}
			res.end();
		});
	}
	else {
		res.send('Por favor ingrese el usuario y la clave para el nuevo usuario.');
		res.end();
	}
        
    } catch (error) {
        
    }
}

module.exports=Registro;