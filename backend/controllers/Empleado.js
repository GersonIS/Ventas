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
        const empleado = await empleadoModel.findAll({where:{id:req.params.id}});
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