import { DataTypes } from "sequelize";
import db from "../db/db.js";
import clienteModel from "./Cliente.js";
import empleadoModel from "./Empleado.js";

const clubModel = db.define('clubes', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    descripcion: {
        type: DataTypes.STRING(45),
        allowNull: false
    }
})

clubModel.hasMany(clienteModel, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})

clienteModel.belongsTo(clubModel)

empleadoModel.hasMany(clubModel, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})

clubModel.belongsTo(empleadoModel)

export default clubModel;