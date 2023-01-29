import express from "express";
import { createCliente, getAllClientes } from "../controllers/Cliente.js";

const routerCliente = express.Router();

routerCliente.get('/', getAllClientes);
routerCliente.post('/', createCliente);

export default routerCliente;