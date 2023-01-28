import { DataTypes } from "sequelize";
import db from "../db/db.js";
import empleadoModel from "./Empleado.js";

const tallaModel = db.define('tallas', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    talla: {
        type: DataTypes.STRING(5),
        allowNull: false
    }
}, {
    timestamps: true
})

empleadoModel.hasMany(tallaModel, {
    foreignKey: 'empleadoId',
    sourceKey: 'id'
})

tallaModel.belongsTo(empleadoModel, {
    foreignKey: 'empleadoId',
    targetKey: 'id'
})

export default tallaModel;