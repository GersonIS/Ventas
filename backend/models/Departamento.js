import { DataTypes } from "sequelize";
import db from "../db/db.js";
import provinciaModel from "./Provincia.js";

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
})

departamentoModel.hasMany(provinciaModel, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})

provinciaModel.belongsTo(departamentoModel)

export default departamentoModel;