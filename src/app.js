    import express from "express";
    import morgan from "morgan";
    import usersRouter from "./routes/users.route";
    import TasksRouter from "./routes/tasks.route";

    const app = express();

    // settings

    app.set('port', process.env.PORT);

    // Routes
    app.use(express.json());

    app.use(usersRouter);
    app.use(TasksRouter);
    // Middleware
    app.use((req, res, next) => {
        res.status(404).json({
            message: 'Endpoint not found'
        })
    })
    app.use(morgan('dev')); 

    export default app;