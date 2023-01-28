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
}, {
    timestamps: true
})

empleadoModel.hasMany(generoModel, {
    foreignKey: 'empleadoId',
    sourceKey: 'id'
})

generoModel.belongsTo(empleadoModel, {
    foreignKey: 'empleadoId',
    targetKey: 'id'
})

export default generoModel;