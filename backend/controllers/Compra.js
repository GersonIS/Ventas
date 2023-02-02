import express from "express";
import compraModel from "../models/Compra";

export const getAllCompras = async (req, res) => {
    try {
        const compras = await compraModel.findAll();
        res.json(compras);
    } catch (error) {
        res.json({ message: `Error al traer todas las compras ${error}` });
    }
}

export const getCompra = async (req, res) => {
    try {
        const compra = await compraModel.findAll({ where: { id: req.params.id } });
        res.json(compra[0]);
    } catch (error) {
        res.json({ message: `Error al traer una compra ${error}` });
    }
}

export const createCompra = async (req,res) => {
    try {
        
    } catch (error) {
        res.json({ message: `Error al crear una compra ${error}` });
    }
}