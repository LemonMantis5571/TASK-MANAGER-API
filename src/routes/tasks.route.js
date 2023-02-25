import { Router } from "express";
import { TasksMethods as TasksController } from "../controller/methods.controller";
const router = Router();

router.get("/api/users/:id/tasks", TasksController.getUserTasks);
router.delete("/api/users/:id/tasks/:taskId", TasksController.DeleteUserTasks);
router.post("/api/users/create/tasks", TasksController.CreateUserTask);




export default router;