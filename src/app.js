import express from "express";
import morgan from "morgan";
import EmplooyeRouter from "./routes/employee.route";
import databaseRouter from "./routes/database.route";

const app = express();

// settings

app.set('port', 4001);

// Middleware
app.use(express.json());

app.use(databaseRouter);
app.use(EmplooyeRouter);

app.use(morgan('dev')); 

export default app;