import {config} from "dotenv";
import { createPool } from "mysql2/promise";

config();

export const APIKEY = process.env.APIKEY || "";
console.log(APIKEY);

export const pool = createPool({
    host: process.env.HOST || "",
    user: process.env.USER || "",
    password: process.env.PASSWORD || "",
    port: process.env.DB_PORT || "",
    database: process.env.DATABASE || "",

});


