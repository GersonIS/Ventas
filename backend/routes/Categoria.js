import express from "express";
import { createCategoria, deleteCategoria, getAllCategorias, getCategoria, updateCategoria } from "../controllers/Categoria.js";

const routerCategoria = express.Router();

routerCategoria.get('/', getAllCategorias);
routerCategoria.get('/:id', getCategoria);
routerCategoria.post('/', createCategoria);
routerCategoria.put('/:id', updateCategoria);
routerCategoria.delete('/:id', deleteCategoria);

export default routerCategoria;