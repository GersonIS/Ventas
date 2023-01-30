import express from "express";
import { createTemporada, deleteTemporada, getAllTemporadas, getTemporada, updateTemporada } from "../controllers/Temporada.js";

const routerTemporada = express.Router();

routerTemporada.get('/', getAllTemporadas);
routerTemporada.get('/:id', getTemporada);
routerTemporada.post('/', createTemporada);
routerTemporada.put('/:id', updateTemporada);
routerTemporada.delete('/:id', deleteTemporada);

export default routerTemporada;