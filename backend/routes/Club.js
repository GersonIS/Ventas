import express from "express";
import { createClub, deleteClub, getAllClubes, getClub, updateClub } from "../controllers/Club.js";

const routerClub = express.Router();

routerClub.get('/', getAllClubes);
routerClub.get('/:id', getClub);
routerClub.post('/', createClub);
routerClub.put('/:id', updateClub);
routerClub.delete('/:id', deleteClub);

export default routerClub;