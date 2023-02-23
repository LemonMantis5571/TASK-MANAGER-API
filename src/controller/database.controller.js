import { pool } from "../config";

export const queri = async(req, res ) => {
   const [result] = await pool.query('SELECT 1 + 1 AS result');
   res.json(result[0]);
}