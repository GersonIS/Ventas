import { DataTypes } from "sequelize";
import db from "../db/db.js";
import userModel from "./User.js";

const empleadoModel = db.define('empleados', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    sueldo: {
        type: DataTypes.DECIMAL(8, 2),
        allowNull: false
    },
    rol: {
        type: DataTypes.STRING(15),
        allowNull: false
    }
}, {
    timestamps: true
})

userModel.hasOne(empleadoModel, {
    foreignKey: 'userId',
    sourceKey: 'id'
})

empleadoModel.belongsTo(userModel, {
    foreignKey: 'userId',
    targetKey: 'id'
})

export default empleadoModel;