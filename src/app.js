    import express from "express";
    import morgan from "morgan";
    import usersRouter from "./routes/users.route.js";
    import TasksRouter from "./routes/tasks.route.js";
    const app = express();

    // settings

    app.set('port', process.env.PORT);

    //header

    app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Cache-Control');
        next();
    });


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