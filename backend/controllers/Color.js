import colorModel from "../models/Color.js";

export const getAllColores = async (req, res) => {
    try {
        const colores = await colorModel.findAll();
        res.json(colores);
    } catch (error) {
        res.json({ message: `Error al traer todos los colores ${error}` });
    }
}

export const getColor = async (req, res) => {
    try {
        const color = await colorModel.findAll({ where: { id: req.params.id } });
        res.json(color[0]);
    } catch (error) {
        res.json({ message: `Error al traer un color ${error}` });
    }
}

export const createColor = async (req, res) => {
    try {
        await colorModel.create(req.body);
        res.json({ message: 'Se creo el color con exito' });
    } catch (error) {
        res.json({ message: `Error al crear un color ${error}` });
    }
}

export const updateColor = async (req, res) => {
    try {
        await colorModel.update(req.body, { where: { id: req.params.id } });
        res.json({ message: 'Se actualizo el color con exito' });
    } catch (error) {
        res.json({ message: `Error al actualizar un color ${error}` });
    }
}

export const deleteColor = async (req, res) => {
    try {
        await colorModel.destroy({ where: { id: req.params.id } });
        res.json({ message: 'Se elimino el color con exito' });
    } catch (error) {
        res.json({ message: `Error al eliminar un color ${error}` });
    }
}