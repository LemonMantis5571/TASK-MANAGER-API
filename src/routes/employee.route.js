import { response, Router } from "express";
import { methods as employeeControllers } from "../controller/methods.controller";

const router = Router();

router.get("/api/empleados", employeeControllers.getEmpleados);
router.get("/api/empleados/:id", employeeControllers.getEmpleadoPorID);
router.post("/api/empleados/create", employeeControllers.createEmpleados);
router.patch("/api/empleados/update/:id", employeeControllers.UpdateEmpleados);
router.delete("/api/empleados/delete/:id", employeeControllers.DeleteEmpleados);


export default router;