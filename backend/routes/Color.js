import express from "express";
import { createColor, deleteColor, getAllColores, getColor, updateColor } from "../controllers/Color.js";

const routerColor = express.Router();

routerColor.get('/', getAllColores);
routerColor.get('/:id', getColor);
routerColor.post('/', createColor);
routerColor.put('/:id', updateColor);
routerColor.delete('/:id', deleteColor);

export default routerColor;