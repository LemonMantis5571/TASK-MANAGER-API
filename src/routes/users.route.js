import { Router } from "express";
import { methods as usersControllers } from "../controller/methods.controller.js";
import verifyToken from "../Auth/auth.token.js";
import { loginRateLimiter, registerRateLimiter } from "../middlewares/ratelimit.js";

const router = Router();

router.get("/api/users/id", verifyToken, usersControllers.getUserByID);
router.post("/api/users/create", registerRateLimiter, usersControllers.createUser);
router.patch("/api/users/update/", verifyToken, usersControllers.UpdateUsers);
router.delete("/api/users/delete/:id", verifyToken, usersControllers.DeleteUsers);
router.post("/api/users/login", loginRateLimiter, usersControllers.loginUsers);

export default router;