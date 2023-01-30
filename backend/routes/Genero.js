import express from "express";
import { createGenero, deleteGenero, getAllGeneros, getGenero, updateGenero } from "../controllers/Genero.js";

const routerGenero = express.Router();

routerGenero.get('/', getAllGeneros);
routerGenero.get('/:id', getGenero);
routerGenero.post('/', createGenero);
routerGenero.put('/:id', updateGenero);
routerGenero.delete('/:id', deleteGenero);

export default routerGenero;