import { pool } from "../config.js";
import jwt from 'jsonwebtoken'

export const createUser = async (req, res) => {
    const {user, password} = req.body;
    try {

        const [results] = await pool.query('SELECT * FROM users WHERE user = ?', [user]);

        if (results.length > 0) {
            return res.status(409).json({message: 'User already exists'});
        }

        const [rows] = await pool.query('INSERT INTO users (user, password) VALUES(?, ?)', [user, password]);

        res.status(201).send({
            id: rows.insertId,
            user
        });


    } catch (error) {
        console.log(error);
        return res.status(500).json({message: error});
    }
   
}

export const getUser = async (req, res) => {

    try {

      const [rows] =  await pool.query('SELECT * FROM users');
      res.status(200).json(rows);

      if(!token) {
        return res.status(401).send({message: 'Missing auth token'});
      }

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: error
        })
    }
}

export const getUserByID = async(req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    const payload = jwt.verify(token, process.env.APIKEY);
    const userId = payload.userId
    try {

        const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [userId]);
   
        if (rows.length <= 0) return res.status(404).json({
            message: 'User not found'
        });

        if(!token) {
            return res.status(401).send({message: 'Missing auth token'});
        }
    
        res.send({
            id: rows[0].id,
            user: rows[0].user
        }); 
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: error
        });
    }
}

export const UpdateUsers = async (req, res) => {
    const {user, password} = req.body;
    const token = req.headers.authorization.split(' ')[1];
    const payload = jwt.verify(token, process.env.APIKEY);
    const userId = payload.userId

    try {

        const [result] =  await pool.query('UPDATE users SET user = IFNULL(?, user), password = IFNULL(?, password) WHERE id = ?', [user, password, userId]);
        result.affectedRows > 0 ? res.status(200) : res.status(404).json({message: 'User not found'});
    
        const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [userId]);
        res.json(rows[0]);

        
    } catch (error) {
        console.log(error);
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
        console.log(error);
        return res.status(500).json({
            message: error
        });
    }
    

}

export const loginUsers = async (req, res) => {
    const {user, password} = req.body;
    try {
        
        const [rows] = await pool.query('SELECT * FROM users WHERE user = ? AND password = ?', [user, password])

        if (rows.length === 0) {
            return res.status(401).json({message: 'Wrong Credentials'});
        }

        const token = jwt.sign({user: rows[0].user, userId: rows[0].id}, process.env.APIKEY);
        res.json({token});


    } catch (error) {
        console.log(error);
        return res.status(500).json({message: error});
    }
}