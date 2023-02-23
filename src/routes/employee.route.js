import { response, Router } from "express";
import { methods as employeeControllers } from "../controller/methods.controller";

const router = Router();

router.get("/api/empleados", employeeControllers.getEmpleados);
router.post("/api/empleados/create", employeeControllers.createEmpleados);
router.put("/api/empleados/update", employeeControllers.UpdateEmpleados);
router.delete("/api/empleados/delete", employeeControllers.DeleteEmpleados);


export default router;