const db = require('../database/databaseconfig')
const session = require('express-session');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

async function Login(req, res){
try{
    const {username, password}= req.body;

	let usuario;

	if (username && password) {
		db.query('SELECT * FROM users WHERE username = ?', [username], async (error, results) => {
			
			if (error) throw error;

			if (results.length > 0) {
				 usuario = {
				  id: results[0].id,
				  username: results[0].username,
				  hashedPassword: results[0].hash, 
				};

				const passwordMatch = await bcrypt.compare(password, usuario.hashedPassword);

			if (!passwordMatch) {
					return res.status(401).json({ mensaje: 'Credenciales inválidas' });
			}
		
				const token = jwt.sign({ userId: usuario.id }, 'clave_secreta', { expiresIn: '1h' });

				session.loggedin = true;
				session.username = username;
				console.log(token)
				res.json({ token });
			}
			else {
				res.send(null);
				console.log('Login fallido')
			}
		});
	}
	else {
		res.send('Por favor, ingrese el usuario y la clave.');
		res.end();
	}

}
catch(e){

}

}
module.exports = Login;