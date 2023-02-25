import { response, Router } from "express";
import { methods as usersControllers } from "../controller/methods.controller";

const router = Router();

router.get("/api/users", usersControllers.getUser);
router.get("/api/users/:id", usersControllers.getUserByID);
router.post("/api/users/create", usersControllers.createUser);
router.patch("/api/users/update/:id", usersControllers.UpdateUsers);
router.delete("/api/users/delete/:id", usersControllers.DeleteUsers);

export default router;