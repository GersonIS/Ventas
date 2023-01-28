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
        type: DataTypes.STRING(10),
        allowNull: false
    }
}, {
    timestamps: true
})

empleadoModel.hasMany(colorModel, {
    foreignKey: 'empleadoId',
    sourceKey: 'id'
})

colorModel.belongsTo(empleadoModel, {
    foreignKey: 'empleadoId',
    targetKey: 'id'
})

export default colorModel;