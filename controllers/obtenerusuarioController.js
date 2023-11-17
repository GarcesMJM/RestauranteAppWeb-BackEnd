async function obtenerUsuario(req , res){
    try {
        const {token} = req.body;

        if (!token) {
            return res.status(200).json({ message: 'No hay token' });
          }
        
          jwt.verify(token, 'your-secret-key', (err, decoded) => {
            if (err) {
              return res.status(200).json({ message: 'Invalid token' });
            }
    
            usuario = decoded;
            db.query('SELECT * FROM users WHERE id = ?', [usuario.id], async (error, results) => {

            });
        
            next();
          });
        
    } catch (error) {
        
    }

}
