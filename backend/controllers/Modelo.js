import modeloModel from "../models/Modelo.js"

export const getAllModelos = async (req, res) => {
    try {
        const modelos = await modeloModel.findAll();
        res.json(modelos);
    } catch (error) {
        res.json({ message: `Error al traer todos los modelos ${error}` });
    }
}

export const getModelo = async (req, res) => {
    try {
        const modelo = await modeloModel.findAll({ where: { id: req.params.id } });
        res.json(modelo[0]);
    } catch (error) {
        res.json({ message: `Error al traer un modelo ${error}` });
    }
}

export const createModelo = async (req, res) => {
    try {
        await modeloModel.create(req.body);
        res.json({ message: 'Se creo el modelo con exito' });
    } catch (error) {
        res.json({ message: `Error al crear un modelo ${error}` });
    }
}

export const updateModelo = async (req, res) => {
    try {
        await modeloModel.update(req.body, { where: { id: req.params.id } });
        res.json({ message: 'Se actualizo el modelo con exito' });
    } catch (error) {
        res.json({ message: `Error al actualizar un modelo ${error}` });
    }
}

export const deleteModelo = async (req, res) => {
    try {
        await modeloModel.destroy({ where: { id: req.params.id } });
        res.json({ message: 'Se elimino el modelo con exito' });
    } catch (error) {
        res.json({ message: `Error al eliminar un modelo ${error}` });
    }
}