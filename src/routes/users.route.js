import { response, Router } from "express";
import { methods as usersControllers } from "../controller/methods.controller";
import verifyToken from "../Auth/auth.token";

const router = Router();

router.get("/api/users", verifyToken, usersControllers.getUser);
router.get("/api/users/id", verifyToken, usersControllers.getUserByID);
router.post("/api/users/create", usersControllers.createUser);
router.patch("/api/users/update/", verifyToken, usersControllers.UpdateUsers);
router.delete("/api/users/delete/:id", verifyToken, usersControllers.DeleteUsers);
router.post("/api/users/login", usersControllers.loginUsers);

export default router;