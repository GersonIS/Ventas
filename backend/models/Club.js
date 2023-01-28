import { DataTypes } from "sequelize";
import db from "../db/db.js";
import clienteModel from "./Cliente.js";

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
}, {
    timestamps: true
})

clubModel.hasMany(clienteModel, {
    foreignKey: 'clubId',
    sourceKey: 'id'
})

clienteModel.belongsTo(clubModel, {
    foreignKey: 'clubId',
    targetKey: 'id'
})

export default clubModel;