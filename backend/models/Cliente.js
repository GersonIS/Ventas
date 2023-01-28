import { DataTypes } from "sequelize";
import db from "../db/db.js";
import userModel from "./User.js";

const clienteModel = db.define('clientes', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    descripcion: {
        type: DataTypes.STRING(45),
        allowNull: true
    }
}, {
    timestamps: true
})

userModel.hasOne(clienteModel, {
    foreignKey: 'userId',
    sourceKey: 'id'
})

clienteModel.belongsTo(userModel, {
    foreignKey: 'userId',
    targetKey: 'id'
})

export default clienteModel;