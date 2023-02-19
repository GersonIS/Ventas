import express from "express";
import { createEmpleado, deleteEmpleado, getAllEmpleados, getEmpleado, updateEmpleado, storage } from "../controllers/Empleado.js";
import multer from "multer";

const uploadEmpleado = multer({storage});

const routerEmpleado = express.Router();

routerEmpleado.get('/', getAllEmpleados);
routerEmpleado.get('/:id', getEmpleado);
routerEmpleado.post('/', uploadEmpleado.single("ruta") , createEmpleado);
routerEmpleado.put('/:id', updateEmpleado);
routerEmpleado.delete('/:id', deleteEmpleado);

export default routerEmpleado;