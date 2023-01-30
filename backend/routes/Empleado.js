import express from "express";
import { createEmpleado, deleteEmpleado, getAllEmpleados, getEmpleado, updateEmpleado } from "../controllers/Empleado.js";

const routerEmpleado = express.Router();

routerEmpleado.get('/', getAllEmpleados);
routerEmpleado.get('/:id', getEmpleado);
routerEmpleado.post('/', createEmpleado);
routerEmpleado.put('/:id', updateEmpleado);
routerEmpleado.delete('/:id', deleteEmpleado);

export default routerEmpleado;