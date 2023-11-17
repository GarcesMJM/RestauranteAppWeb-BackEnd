const db = require('../database/databaseconfig')
const jwt = require('jsonwebtoken');

async function obtenerUsuario(req , res){
    try {
        const {token} = req.body;
              
        if (!token) {
            return res.send({ message: 'No hay token' });
          }
          jwt.verify(token, 'clave_secreta', (err, decoded) => {
            if (err) {
              return res.send({ message: 'Invalid token' });
            }
            
            id = decoded.userId;
            db.query('SELECT * FROM users WHERE id = ?', [id], async (error, results) => {

                if (error) throw error;

                if (results.length > 0) {
                let usuario = {
                  id: results[0].id,
                  username: results[0].username,
                  hashedPassword: results[0].hash, 
                };
                res.send(usuario);
            }
            });
          });
        
    } catch (error) {
        
    }

}

module.exports=obtenerUsuario;
