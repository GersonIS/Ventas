import personaModel from "../models/Persona.js";
import proveedorModel from "../models/Proveedor.js"

export const getAllProveedores = async (req, res) => {
    try {
        const proveedores = await proveedorModel.findAll();
        res.json(proveedores);
    } catch (error) {
        res.json({ message: `Error al traer todos los proveedores ${error}` });
    }
}

export const getProveedor = async (req, res) => {
    try {
        const proveedor = await proveedorModel.findAll({ where: { id: req.params.id } });
        res.json(proveedor[0]);
    } catch (error) {
        res.json({ message: `Error al traer un proveedor ${error}` });
    }
}

export const createProveedor = async (req, res) => {
    try {
        const { correo, celular, documento, empresa, empleadoId } = req.body;
        await personaModel.create({ correo, celular, documento });
        const pId = await personaModel.findAll({ where: { correo } });
        const personaId = pId[0].id;
        await proveedorModel.create({ empresa, personaId, empleadoId });
        res.json({ message: 'Se creo el proveedor con exito' });
    } catch (error) {
        res.json({ message: `Error al crear un proveedor ${error}` });
    }
}

export const updateProveedor = async (req, res) => {
    try {
        const { correo, celular, documento, empresa } = req.body;
        const proveedorId = req.params.id;
        await proveedorModel.update({ empresa }, { where: { id: proveedorId } });
        const proveedor = await proveedorModel.findAll({ where: { id: proveedorId } });
        const personaId = proveedor[0].personaId;
        await personaModel.update({ correo, celular, documento }, { where: { id: personaId } });
        res.json({ message: 'Se actualizo el proveedor con exito' });
    } catch (error) {
        res.json({ message: `Error al actualizar un proveedor ${error}` });
    }
}

export const deleteProveedor = async (req, res) => {
    try {
        const proveedorId = req.params.id;
        const proveedor = await proveedorModel.findAll({ where: { id: proveedorId } });
        const personaId = proveedor[0].personaId;
        await personaModel.destroy({ where: { id: personaId } });
        await proveedorModel.destroy({ where: { id: proveedorId } });
        res.json({ message: 'Se elimino el proveedor con exito' });
    } catch (error) {
        res.json({ message: `Error al eliminar un proveedor ${error}` });
    }
}