import { pool } from "../config";


export const createEmpleados = async (req, res) => {
    const {name, password} = req.body;
    try {

        const [rows] = await pool.query('INSERT INTO employee (name, password) VALUES(?, ?)', [name, password]);

        res.send({
            id: rows.insertId,
            name,
            password
        });

    } catch (error) {
        return res.status(500).json({message: error});
    }
   
}

export const getEmpleados = async (req, res) => {
    try {

      const [rows] =  await pool.query('SELECT * FROM employee');
      res.json(rows);

    } catch (error) {
        return res.status(500).json({
            message: error
        })
    }
}

export const getEmpleadoPorID = async(req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [req.params.id]);
   
        if (rows.length <= 0) return res.status(404).json({
            message: 'Employee not found'
        });
    
        res.send(rows[0]); 
    } catch (error) {
        return res.status(500).json({
            message: error
        });
    }
}

export const UpdateEmpleados = async (req, res) => {
    const {id} = req.params;
    const {name, password} = req.body;

    try {

        const [result] =  await pool.query('UPDATE employee SET name = IFNULL(?, name), password = IFNULL(?, password) WHERE id = ?', [name, password, id]);
        result.affectedRows > 0 ? res.status(200) : res.status(404).json({message: 'Employee not found'});
    
        const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [id]);
        res.json(rows[0]);
        
    } catch (error) {
        return res.status(500).json({
            message: error
        });
    }

   
}

export const DeleteEmpleados = async (req, res) => {
    try {

        const [result] = await pool.query('DELETE FROM employee WHERE id = ?', [req.params.id]);
        result.affectedRows > 0 ? res.status(204) : res.status(404).json({message: 'Employee not found'});
        
    } catch (error) {
        return res.status(500).json({
            message: error
        });
    }
    

}