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
})

userModel.hasOne(clienteModel, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})

clienteModel.belongsTo(userModel)

export default clienteModel;