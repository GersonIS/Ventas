import express from "express";
import { createCliente, deleteCliente, getAllClientes, getCliente, updateCliente } from "../controllers/Cliente.js";

const routerCliente = express.Router();

routerCliente.get('/', getAllClientes);
routerCliente.get('/:id', getCliente);
routerCliente.post('/', createCliente);
routerCliente.put('/:id', updateCliente);
routerCliente.delete('/:id', deleteCliente);

export default routerCliente;