import express from "express";
import { createProducto, deleteProducto, getAllProductos, getProducto, updateProducto, storage } from "../controllers/Producto.js";
import multer from "multer";

const uploadProducto = multer({storage});
const images = uploadProducto.fields([{name: "ruta1"}, {name: "ruta2"}, {name: "ruta3"}, {name: "ruta4"}]);

const routerProducto = express.Router();

routerProducto.get('/', getAllProductos);
routerProducto.get('/:id', getProducto);
routerProducto.post('/', images, createProducto);
routerProducto.put('/:id', updateProducto);
routerProducto.delete('/:id', deleteProducto);

export default routerProducto;