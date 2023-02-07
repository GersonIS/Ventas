import { DataTypes } from "sequelize";
import db from "../db/db.js";
import empleadoModel from "./Empleado.js";

const colorModel = db.define('colores', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    color: {
        type: DataTypes.STRING(20),
        allowNull: false
    }
})

empleadoModel.hasMany(colorModel, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})

colorModel.belongsTo(empleadoModel)

export default colorModel;