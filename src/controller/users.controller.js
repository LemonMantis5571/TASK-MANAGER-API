import { pool } from "../config";


export const createUser = async (req, res) => {
    const {user, password} = req.body;
    try {

        const [rows] = await pool.query('INSERT INTO users (user, password) VALUES(?, ?)', [user, password]);

        res.send({
            id: rows.insertId,
            user,
            password
        });

    } catch (error) {
        return res.status(500).json({message: error});
    }
   
}

export const getUser = async (req, res) => {
    try {

      const [rows] =  await pool.query('SELECT * FROM users');
      res.json(rows);

    } catch (error) {
        return res.status(500).json({
            message: error
        })
    }
}

export const getUserByID = async(req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [req.params.id]);
   
        if (rows.length <= 0) return res.status(404).json({
            message: 'User not found'
        });
    
        res.send(rows[0]); 
    } catch (error) {
        return res.status(500).json({
            message: error
        });
    }
}

export const UpdateUsers = async (req, res) => {
    const {id} = req.params;
    const {user, password} = req.body;

    try {

        const [result] =  await pool.query('UPDATE users SET user = IFNULL(?, user), password = IFNULL(?, password) WHERE id = ?', [user, password, id]);
        result.affectedRows > 0 ? res.status(200) : res.status(404).json({message: 'User not found'});
    
        const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
        res.json(rows[0]);
        
    } catch (error) {
        return res.status(500).json({
            message: error
        });
    }

   
}

export const DeleteUsers = async (req, res) => {
    try {

        const [result] = await pool.query('DELETE FROM users WHERE id = ?', [req.params.id]);
        result.affectedRows > 0 ? res.status(204) : res.status(404).json({message: 'User not found'});
        
    } catch (error) {
        return res.status(500).json({
            message: error
        });
    }
    

}