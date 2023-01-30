import { DataTypes } from "sequelize";
import db from "../db/db.js";
import empleadoModel from "./Empleado.js";

const generoModel = db.define('generos', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    genero: {
        type: DataTypes.STRING(10),
        allowNull: false
    }
})

empleadoModel.hasMany(generoModel, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})

generoModel.belongsTo(empleadoModel)

export default generoModel;