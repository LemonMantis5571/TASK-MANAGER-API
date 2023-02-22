import { response, Router } from "express";
import { methods as languageController } from "../controller/language.controller";
const router = Router();

router.get("/", languageController.getLanguages);

export default router;