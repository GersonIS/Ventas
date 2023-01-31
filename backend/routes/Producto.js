import express from "express";
import { createProducto, deleteProducto, getAllProductos, getProducto, updateProducto } from "../controllers/Producto.js";

const routerProducto = express.Router();

routerProducto.get('/', getAllProductos);
routerProducto.get('/:id', getProducto);
routerProducto.post('/', createProducto);
routerProducto.put('/:id', updateProducto);
routerProducto.delete('/:id', deleteProducto);

export default routerProducto;