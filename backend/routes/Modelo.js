import express from "express";
import { createModelo, deleteModelo, getAllModelos, getModelo, updateModelo } from "../controllers/Modelo.js";

const routerModelo = express.Router();

routerModelo.get('/', getAllModelos);
routerModelo.get('/:id', getModelo);
routerModelo.post('/', createModelo);
routerModelo.put('/:id', updateModelo);
routerModelo.delete('/:id', deleteModelo);

export default routerModelo;