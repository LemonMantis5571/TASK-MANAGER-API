import { Router } from "express";
import { queri } from "../controller/database.controller";

const router = Router();

router.get('/ping', queri);


export default router;