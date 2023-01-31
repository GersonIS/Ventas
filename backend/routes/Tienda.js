import express from "express";
import { createTienda, deleteTienda, getAllTiendas, getTienda, updateTienda } from "../controllers/Tienda.js";

const routerTienda = express.Router();

routerTienda.get('/', getAllTiendas);
routerTienda.get('/:id', getTienda);
routerTienda.post('/', createTienda);
routerTienda.put('/:id', updateTienda);
routerTienda.delete('/:id', deleteTienda);

export default routerTienda;