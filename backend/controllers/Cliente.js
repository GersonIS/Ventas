import clienteModel from "../models/Cliente.js";
import personaModel from "../models/Persona.js";
import userModel from "../models/User.js";

export const getAllClientes = async (req, res) => {
    try {
        const clientes = await clienteModel.findAll();
        res.json(clientes);
    } catch (error) {
        res.json({ message: `Error al traer todos los clientes ${error}` });
    }
}

export const getCliente = async (req, res) => {
    try {
        const cliente = await clienteModel.findAll({ where: { id: req.params.id } });
        res.json(cliente[0]);
    } catch (error) {
        res.json({ message: `Error al traer un cliente ${error}` });
    }
}

export const createCliente = async (req, res) => {
    try {
        const { correo, celular, documento, username, password, ruta, descripcion } = req.body;
        await personaModel.create({ correo, celular, documento });
        const pId = await personaModel.findAll({ where: { correo } });
        const personaId = pId[0].id;
        await userModel.create({ username, password, ruta, personaId });
        const uId = await userModel.findAll({ where: { username } });
        const userId = uId[0].id;
        const clubId = 1;
        await clienteModel.create({ descripcion, userId, clubId });
        res.json({ message: 'Se creo el cliente con exito' });
    } catch (error) {
        res.json({ message: `Error al crear un cliente ${error}` });
    }
}

export const updateCliente = async (req, res) => {
    try {
        const clienteId = req.params.id;
        const { correo, celular, documento, username, password, ruta, descripcion } = req.body;
        await clienteModel.update({ descripcion }, { where: { id: clienteId } });
        const cliente = await clienteModel.findAll({ where: { id: clienteId } });
        const userId = cliente[0].userId;
        await userModel.update({ username, password, ruta }, { where: { id: userId } });
        const persona = await userModel.findAll({ where: { id: userId } });
        const personaId = persona[0].personaId;
        await personaModel.update({ correo, celular, documento }, { where: { id: personaId } });
        res.json({ message: 'Se actualizo el cliente con exito' });
    } catch (error) {
        res.json({ message: `Error al actualizar un cliente ${error}` });
    }
}

export const deleteCliente = async (req, res) => {
    try {
        const cliente = await clienteModel.findAll({ where: { id: req.params.id } });
        const userId = cliente[0].userId;
        const user = await userModel.findAll({ where: { id: userId } });
        const personaId = user[0].personaId;
        await personaModel.destroy({ where: { id: personaId } });
        res.json({ message: 'Se elimino un cliente con exito' });
    } catch (error) {
        res.json({ message: `Error al eliminar un cliente ${error}` });
    }
}