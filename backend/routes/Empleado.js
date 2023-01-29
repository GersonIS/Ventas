import express from "express";
import { createEmpleado, getAllEmpleados } from "../controllers/Empleado.js";

const routerEmpleado = express.Router();

routerEmpleado.get('/', getAllEmpleados);
routerEmpleado.post('/', createEmpleado);

export default routerEmpleado;