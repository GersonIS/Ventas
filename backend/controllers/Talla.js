import tallaModel from "../models/Talla.js"

export const getAllTallas = async (req, res) => {
    try {
        const tallas = await tallaModel.findAll();
        res.json(tallas);
    } catch (error) {
        res.json({ message: `Error al traer todas las tallas ${error}` });
    }
}

export const getTalla = async (req, res) => {
    try {
        const talla = await tallaModel.findAll({ where: { id: req.params.id } });
        res.json(talla[0]);
    } catch (error) {
        res.json({ message: `Error al traer una talla ${error}` });
    }
}

export const createTalla = async (req, res) => {
    try {
        await tallaModel.create(req.body);
        res.json({ message: 'Se creo la talla con exito' });
    } catch (error) {
        res.json({ message: `Error al crear una talla ${error}` });
    }
}

export const updateTalla = async (req, res) => {
    try {
        await tallaModel.update(req.body, { where: { id: req.params.id } });
        res.json({ message: 'Se actualizo la talla con exito' });
    } catch (error) {
        res.json({ message: `Error al actualizar una talla ${error}` });
    }
}

export const deleteTalla = async (req, res) => {
    try {
        await tallaModel.destroy({ where: { id: req.params.id } });
        res.json({ message: 'Se elimino la temporada con exito' });
    } catch (error) {
        res.json({ message: `Error al eliminar una temporada ${error}` });
    }
}