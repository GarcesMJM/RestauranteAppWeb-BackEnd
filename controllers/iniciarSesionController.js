const db = require('../database/databaseconfig')
const session = require('express-session');

async function Login(req, res){
try{
    const {username, password}= req.body;

	if (username && password) {
		db.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (error, results) => {
			if (error) throw error;

			if (results.length >0) {
				session.loggedin = true;
				session.username = username;
				res.send(true);
			}
			else {
				res.send('Login fallido');
				console.log('***************');
				console.log('Login fallido')
			}
			res.end();
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