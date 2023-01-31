import tiendaModel from "../models/Tienda.js";

export const getAllTiendas = async (req, res) => {
    try {
        const tiendas = await tiendaModel.findAll();
        res.json(tiendas);
    } catch (error) {
        res.json({ message: `Error al traer todas las tiendas ${error}` });
    }
}

export const getTienda = async (req, res) => {
    try {
        const tienda = await tiendaModel.findAll({ where: { id: req.params.id } });
        res.json(tienda[0]);
    } catch (error) {
        res.json({ message: `Error al traer una tienda ${error}` });
    }
}

export const createTienda = async (req, res) => {
    try {
        await tiendaModel.create(req.body);
        res.json({ message: 'Se creo una tienda con exito' });
    } catch (error) {
        res.json({ message: `Error al crear una tienda ${error}` });
    }
}

export const updateTienda = async (req, res) => {
    try {
        await tiendaModel.update(req.body, { where: { id: req.params.id } });
        res.json({ message: 'Se actualizo la tienda con exito' });
    } catch (error) {
        res.json({ message: `Error al actualizar una tienda ${error}` });
    }
}

export const deleteTienda = async (req, res) => {
    try {
        await tiendaModel.destroy({ where: { id: req.params.id } });
        res.json({ message: 'Se elimino la tienda con exito' });
    } catch (error) {
        res.json({ message: `Error al eliminar una tienda ${error}` });
    }
}