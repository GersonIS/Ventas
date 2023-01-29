import generoModel from "../models/Genero.js";

export const getAllGeneros = async (req, res) => {
    try {
        const generos = await generoModel.findAll();
        res.json(generos);
    } catch (error) {
        res.json({ message: `Error al traer todos los generos ${error}` });
    }
}

export const getGenero = async (req, res) => {
    try {
        const genero = await generoModel.findAll({ where: { id: req.params.id } });
        res.json(genero[0]);
    } catch (error) {
        res.json({ message: `Error al traer un genero ${error}` });
    }
}

export const createGenero = async (req, res) => {
    try {
        await generoModel.create(req.body);
        res.json({ message: 'Se creo el genero con exito' });
    } catch (error) {
        res.json({ message: `Error al crear un genero ${error}` });
    }
}

export const updateGenero = async (req, res) => {
    try {
        await generoModel.update(req.body, { where: { id: req.params.id } });
        res.json({ message: 'Se actualizo el genero con exito' });
    } catch (error) {
        res.json({ message: `Error al actualizar un genero ${error}` });
    }
}

export const deleteGenero = async (req, res) => {
    try {
        await generoModel.destroy({ where: { id: req.params.id } });
        res.json({ message: 'Se elimino el genero con exito' });
    } catch (error) {
        res.json({ message: `Error al eliminar un genero ${error}` });
    }
}