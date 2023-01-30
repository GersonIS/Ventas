import { DataTypes } from "sequelize";
import db from "../db/db.js";
import empleadoModel from "./Empleado.js";

const modeloModel = db.define('modelos', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    modelo: {
        type: DataTypes.STRING(15),
        allowNull: false
    }
})

empleadoModel.hasMany(modeloModel, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})

modeloModel.belongsTo(empleadoModel)

export default modeloModel;