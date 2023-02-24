import express from "express";
import morgan from "morgan";
import EmplooyeRouter from "./routes/employee.route";
import databaseRouter from "./routes/database.route";

const app = express();

// settings

app.set('port', process.env.PORT);

// Routes
app.use(express.json());

app.use(databaseRouter);
app.use(EmplooyeRouter);
// Middleware
app.use((req, res, next) => {
    res.status(404).json({
        message: 'Endpoint not found'
    })
})
app.use(morgan('dev')); 

export default app;