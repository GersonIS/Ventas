import { DataTypes } from "sequelize";
import db from "../db/db";
import { provinciaModel } from "./Provincia";

const departamentoModel = db.define('departamentos', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    departamento: {
        type: DataTypes.STRING(45),
        allowNull: false
    }
}, { 
    timestamps: true 
})

departamentoModel.hasMany(provinciaModel, {
    foreignKey: 'departamentoId',
    sourceKey: 'id'
})

provinciaModel.belongsTo(departamentoModel, {
    foreignKey: 'departamentoId',
    targetKey: 'id'
})

export default departamentoModel;