const db = require('../database/databaseconfig')

async function obtenerReservas(req, res){
    const {username}=req.body;
    console.log(username)

    if(username){
        db.query('SELECT * FROM bookings WHERE name = ?', [username], async (error, results) => {
        console.log('hola')
            if (error) throw error;

            if (results.length > 0) {
                res.send(results);         
            }
        });
    }


}

module.exports=obtenerReservas;