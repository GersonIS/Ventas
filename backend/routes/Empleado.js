import express from "express";
import { createEmpleado, deleteEmpleado, getAllEmpleados } from "../controllers/Empleado.js";

const routerEmpleado = express.Router();

routerEmpleado.get('/', getAllEmpleados);
routerEmpleado.post('/', createEmpleado);
routerEmpleado.delete('/:id', deleteEmpleado);

export default routerEmpleado;