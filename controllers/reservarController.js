const db = require('../database/databaseconfig')

async function Book(req, res) {
    try {
        const { username, name, email, num, sede, date, time } = req.body;

        if (name && email && num && sede && date && time) {
            db.query("INSERT INTO bookings(username, name, email, num, sede, date, time) VALUES(?, ?, ?, ?, ?, ?, ?)", [username, name, email, num, sede, date, time], (error, results) => {
                if (results) {
                    res.send('¡Tu reservación ha sido creada!');
                    console.log('Reservación creada en la BD.');
                }
                else {
                    res.send('No se pudo crear la reservación');
                    console.log('!***************!');
                    console.log('Error creando la reservación en la BD:');
                    console.log(error);
                }
                res.end();
            });
        }
        else {
            console.log('Datos vacíos.')
            res.send('Algunos datos obligatorios se encuentran vacíos.');
            res.end();
        }

    }
    catch (e) {
        console.log(e);
    }
}


module.exports = Book;