import { DataTypes } from "sequelize";
import db from "../db/db";
import empleadoModel from "./Empleado";

const categoriaModel = db.define('categorias', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    categoria: {
        type: DataTypes.STRING(20),
        allowNull: false
    }
}, {
    timestamps: true
})

empleadoModel.hasMany(categoriaModel,{
    foreignKey: 'empleadoId',
    sourceKey: 'id'
})

categoriaModel.belongsTo(empleadoModel,{
    foreignKey: 'empleadoId',
    targetKey: 'id'
})

export default categoriaModel;