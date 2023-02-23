import { pool } from "../config";


export const createEmpleados = async (req, res) => {
   
    const {name, password} = req.body;
    const [rows] = await pool.query('INSERT INTO employee (name, password) VALUES(?, ?)', [name, password]);

    res.send({
        id: rows.insertId,
        name,
        password
    });
}

export const getEmpleados = async (req, res) => {
   const [rows] =  await pool.query('SELECT * FROM employee');
   console.log(rows);
   res.json(rows);
}

export const getEmpleadoPorID = async(req, res) => {
    const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [req.params.id]);
    console.log(rows);
    res.send(rows);
}

export const UpdateEmpleados = async (req, res) => {
    res.send('Actualizando empleados');
}

export const DeleteEmpleados = async (req, res) => {
    res.send('Eliminando empleados');
}