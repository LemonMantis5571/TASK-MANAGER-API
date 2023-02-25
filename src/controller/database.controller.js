import { pool } from "../config";

export const getUserTasks = async (req,res) => {
   try {
      const [rows] = await pool.query('SELECT tasks.*, users.user as user_name FROM tasks INNER JOIN users ON tasks.user_id = users.id WHERE tasks.user_id = ? ', [req.params.id]);

      rows.length <= 0 ? res.status(404).json({message: 'This user has no tasks yet'}) : res.send(rows);
      console.log(rows);

   } catch (error) {
      return res.status(500).json({
         message: error
      });
   }
}

export const DeleteUserTasks = async (req, res) => {
   try {
      const {taskId, id} = req.params;
      const [result] = await pool.query('SELECT tasks.title FROM tasks WHERE id = ? AND user_id = ?', [taskId, id]);
      const [rows] = await pool.query('DELETE FROM tasks WHERE user_id = ? AND id = ?', [id, taskId]);

      rows.affectedRows > 0 ? res.status(200).json({message: `Task: '${result[0].title}' deleted`}) : res.status(404).json({message: 'Task Not Found'});

   } catch (error) {
      return res.status(500).json({
         message: error
      });
   }
}

export const CreateUserTask = async (req, res) => {
   try {
      const {user_id, title, description, is_completed, priority, expires} = req.body;

      const [rows] = await pool.query('INSERT INTO tasks (user_id, title, description, is_completed, priority, expires) VALUES (?, ?, ? , ?, ?, ?)',
      [user_id,title,description,is_completed,priority,expires]);

      res.send({
         user_id,
         title,
         description,
         is_completed,
         priority,
         expires
      })

   } catch (error) {
      return res.status(500).json({
         message: error
      });
   }
}