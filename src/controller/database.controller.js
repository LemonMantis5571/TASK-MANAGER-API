import { pool } from "../config.js";
import jwt from 'jsonwebtoken';

export const getUserTasks = async (req,res) => {

   const token = req.headers.authorization.split(' ')[1];
   const payload = jwt.verify(token, process.env.APIKEY);
   const userId = payload.userId

   try {
      const [rows] = await pool.query('SELECT tasks.*, users.user as user_name FROM tasks INNER JOIN users ON tasks.user_id = users.id WHERE tasks.user_id = ? ', [userId]);

      if (rows.length <= 0) {
         return res.status(404).json({message: 'This user has no tasks yet'});
      }

      res.status(200).send(rows);
      
   } catch (error) {
      console.log(error);
      return res.status(500).json({
         message: error
      });
   }
}

export const DeleteUserTasks = async (req, res) => {
   
   const token = req.headers.authorization.split(' ')[1];
   const payload = jwt.verify(token, process.env.APIKEY);
   const userId = payload.userId

   try {
      const {taskId, id} = req.params;
      const [result] = await pool.query('SELECT tasks.title FROM tasks WHERE id = ? AND user_id = ?', [taskId, userId]);
      const [rows] = await pool.query('DELETE FROM tasks WHERE user_id = ? AND id = ?', [userId, taskId]);

      if (rows.affectedRows <= 0) {
         return res.status(404).json({message: 'Task Not Found'});
      }

       res.status(200).json({message: `Task: '${result[0].title}' deleted`});

   } catch (error) {
      console.log(error);
      return res.status(500).json({
         message: error
      });
   }
}

export const CreateUserTask = async (req, res) => {  
   const token = req.headers.authorization.split(' ')[1];
   const payload = jwt.verify(token, process.env.APIKEY);
   const userId = payload.userId
   try {
      const {title, description, is_completed, priority, expires} = req.body;

      const [rows] = await pool.query('INSERT INTO tasks (user_id, title, description, is_completed, priority, expires) VALUES (?, ?, ? , ?, ?, ?)',
      [userId,title,description,is_completed,priority,expires]);

      res.status(201).send({
         user_id: userId,
         title,
         description,
         is_completed,
         priority,
         expires
      })


   } catch (error) {
      console.log(error);
      return res.status(500).json({
         message: error
      });
   }
}