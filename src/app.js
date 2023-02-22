import express from "express";
import morgan from "morgan";
import router from "./routes/language.route";

const app = express();

// settings

app.set('port', 4001);

// Middleware

app.use("/api/languages", router);

app.use(morgan('dev')); 

export default app;