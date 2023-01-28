import { DataTypes } from "sequelize";
import db from "../db/db.js";
import empleadoModel from "./Empleado.js";

const temporadaModel = db.define('temporadas', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    temporada: {
        type: DataTypes.STRING(10),
        allowNull: false
    }
}, {
    timestamps: true
})

empleadoModel.hasMany(temporadaModel, {
    foreignKey: 'empleadoId',
    sourceKey: 'id'
})

temporadaModel.belongsTo(empleadoModel, {
    foreignKey: 'empleadoId',
    targetKey: 'id'
})

export default temporadaModel;