import categoriaModel from "../models/Categoria.js";

export const getAllCategorias = async (req, res) => {
    try {
        const categorias = await categoriaModel.findAll();
        res.json(categorias);
    } catch (error) {
        res.json({ message: `Error al traer todas las categorias ${error}` });
    }
}

export const getCategoria = async (req, res) => {
    try {
        const categoria = await categoriaModel.findAll({ where: { id: req.params.id } });
        res.json(categoria[0]);
    } catch (error) {
        res.json({ message: `Error al traer una categoria ${error}` });
    }
}

export const createCategoria = async (req, res) => {
    try {
        await categoriaModel.create(req.body);
        res.json({ message: 'Se creo la categoria con exito' });
    } catch (error) {
        res.json({ message: `Error al crear una categoria ${error}` });
    }
}

export const updateCategoria = async (req, res) => {
    try {
        await categoriaModel.update(req.body, { where: { id: req.params.id } });
        res.json({ message: 'Se actualizo la categoria con exito' });
    } catch (error) {
        res.json({ message: `Error al actualizar una categoria ${error}` });
    }
}

export const deleteCategoria = async (req, res) => {
    try {
        await categoriaModel.destroy({ where: { id: req.params.id } });
        res.json({ message: 'Se elimino la categoria con exito' });
    } catch (error) {
        res.json({ message: `Error al eliminar una categoria ${error}` });
    }
}