import { Router } from "express";
import verifyToken from "../Auth/auth.token";
import { TasksMethods as TasksController } from "../controller/methods.controller";
const router = Router();

router.get("/api/users/id/tasks", verifyToken, TasksController.getUserTasks);
router.delete("/api/users/id/tasks/:taskId", verifyToken, TasksController.DeleteUserTasks);
router.post("/api/users/create/tasks", TasksController.CreateUserTask);




export default router;