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