import express from "express";
import { createProveedor, deleteProveedor, getAllProveedores, getProveedor, updateProveedor } from "../controllers/Proveedor.js";

const routerProveedor = express.Router();

routerProveedor.get('/', getAllProveedores);
routerProveedor.get('/:id', getProveedor);
routerProveedor.post('/', createProveedor);
routerProveedor.put('/:id', updateProveedor);
routerProveedor.delete('/:id', deleteProveedor);

export default routerProveedor;