import empleadoModel from "../models/Empleado.js";
import personaModel from "../models/Persona.js";
import userModel from "../models/User.js";
import multer from "multer";
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";
import promisify from "util";

const jwt_secreto = "proyectoinventario";
const jwt_tiempo_expira = "7d";
const jwt_cookie_expires = 90;

export const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./images/users/");
    },
    filename: (req, file, cb) => {
        const ext = file.originalname.split('.').pop();
        const ruta = `${Date.now()}.${ext}`;
        cb(null, ruta);
    }
})

export const login = async (req, res) => {
    try {
        const user = await userModel.findAll({ where: { username: req.body.username } });
        if (user[0]) {
            if (await bcrypt.compare(req.body.password,user[0].password)) {
                const id = user[0].id;
                const token = jwt.sign({ id }, jwt_secreto, { expiresIn: jwt_tiempo_expira });
                console.log("TOken: " + token);
                const cookiesOptions = {
                    expires: new Date(Date.now() + jwt_cookie_expires * 24 * 60 * 60 * 1000),
                    httpOnly: true
                }
                res.cookie('jwt', token, cookiesOptions);
                res.json({ message: "" });
            } else {
                res.json({ message: "Contraseña incorrecta" });
            }
        } else{
            res.json({ message: "Usuario incorrecto" });
        }
    } catch (error) {
        res.json({ message: `Error en el login de un empleado ${error}` });
    }
}

export const verificaLogin = async (req, res, next) => {
    if (req.cookies.jwt) {
        try {
            const decodificada = await promisify(jwt.verify)(req.cookies.jwt, jwt_secreto);
            const userId = decodificada.id;
            const user = await userModel.findAll({ where: { id: userId } });
            const empleado = await empleadoModel.findAll({ where: { userId } })
            const id = empleado[0].id;
            const usuario = user[0].username;
            const rol = empleado[0].rol;
            const datos = {
                id,
                usuario,
                rol
            };
            req.user = datos;
            return next();
        } catch (error) {
            res.json({ message: `Error en la verificacion de login de un empleado ${error}` });
        }
    } else {
        res.json({ message: `Debe iniciar sesion antes de ingresar a la aplicacion ${error}` });
    }
}

export const logout = (req, res) => {
    try {
        res.clearCookie("jwt");
        res.json({ message: "Sesion cerrada exitosamente" });
    } catch (error) {
        res.json({ message: `Error al cerrar la sesion de un empleado ${error}` });
    }
}

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
        const { correo, celular, documento, username, password, sueldo, rol } = req.body;
        const ruta = req.file;
        const fileName = `http://localhost:5000/images/users/${ruta.filename}`;
        await personaModel.create({ correo, celular, documento });
        const pId = await personaModel.findAll({ where: { correo } });
        const personaId = pId[0].id;
        const pass = await bcrypt.hash(password, 8)
        await userModel.create({ username, password: pass, ruta: fileName, personaId });
        const uId = await userModel.findAll({ where: { username } });
        const userId = uId[0].id;
        await empleadoModel.create({ sueldo, rol, userId });
        res.json({ message: "Se creo un empleado con exito" });
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
        await userModel.update({ username, password, ruta }, { where: { id: userId } });
        const user = await userModel.findAll({ where: { id: userId } });
        const personaId = user[0].personaId;
        await personaModel.update({ correo, celular, documento }, { where: { id: personaId } });
        res.json({ message: 'Se actualizo el empleado con exito' });
    } catch (error) {
        res.json({ message: `Error al actualizar un empleado ${error}` });
    }
}

export const deleteEmpleado = async (req, res) => {
    try {
        const empleado = await empleadoModel.findAll({ where: { id: req.params.id } });
        const userId = empleado[0].userId;
        const user = await userModel.findAll({ where: { id: userId } });
        const personaId = user[0].personaId;
        await personaModel.destroy({ where: { id: personaId } });
        res.json({ message: 'Se elimino un empleado con exito' });
    } catch (error) {
        res.json({ message: `Error al eliminar un empleado ${error}` });
    }
}