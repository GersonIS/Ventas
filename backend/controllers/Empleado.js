import empleadoModel from "../models/Empleado.js";
import personaModel from "../models/Persona.js";
import userModel from "../models/User.js";

export const getAllEmpleados = async (req, res) => {
    try {
        const empleados = await empleadoModel.findAll();
        res.json(empleados);
    } catch (error) {
        res.json({ message: `Error al traer todos los empleados ${error}` });
    }
}

export const getEmpleado = async (req, res) => {
    try {
        const empleado = await empleadoModel.findAll({ where: { id: req.params.id } });
        res.json(empleado[0]);
    } catch (error) {
        res.json({ message: `Error al traer un empleado ${error}` });
    }
}

export const createEmpleado = async (req, res) => {
    try {
        const { correo, celular, documento, username, password, ruta, sueldo, rol } = req.body;
        await personaModel.create({ correo, celular, documento });
        const pId = await personaModel.findAll({ where: { correo } });
        const personaId = pId[0].id;
        await userModel.create({ username, password, ruta, personaId });
        const uId = await userModel.findAll({ where: { username } });
        const userId = uId[0].id;
        await empleadoModel.create({ sueldo, rol, userId });
        res.json({ message: 'Se creo el empleado con exito' });
    } catch (error) {
        res.json({ message: `Error al crear un empleado ${error}` });
    }
}

export const updateEmpleado = async (req, res) => {
    try {
        const empleadoId = req.params.id;
        const { correo, celular, documento, username, password, ruta, sueldo, rol } = req.body;
        await empleadoModel.update({ sueldo, rol }, { where: { id: empleadoId } });
        const empleado = await empleadoModel.findAll({ where: { id: empleadoId } });
        const userId = empleado[0].userId;
        const user = await userModel.findAll({ where: { id: userId } });
        const personaId = user[0].personaId;
        await personaModel.update({ correo, celular, documento }, { where: { id: personaId } });
        await userModel.update({ username, password, ruta }, { where: { id: userId } });
        res.json({ message: 'Se actualizo el empleado con exito' });
    } catch (error) {
        res.json({ message: `Error al actualizar un empleado ${error}` });
    }
}

export const deleteEmpleado = async (req, res) => {
    try {
        //ver si resulta onDelete en proveedor
        const empleadoId = req.params.id;
        await empleadoModel.destroy({ where: { id: empleadoId } });
        res.json({ message: 'Se elimino un empleado con exito' });
    } catch (error) {
        res.json({ message: `Error al eliminar un empleado ${error}` });
    }
}