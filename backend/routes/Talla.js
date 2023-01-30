import express from "express";
import { createTalla, deleteTalla, getAllTallas, getTalla, updateTalla } from "../controllers/Talla.js";

const routerTalla = express.Router();

routerTalla.get('/', getAllTallas);
routerTalla.get('/:id', getTalla);
routerTalla.post('/', createTalla);
routerTalla.put('/:id', updateTalla);
routerTalla.delete('/:id', deleteTalla);

export default routerTalla;