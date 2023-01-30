import { DataTypes } from "sequelize";
import db from "../db/db.js";
import empleadoModel from "./Empleado.js";

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
})

empleadoModel.hasMany(categoriaModel, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})

categoriaModel.belongsTo(empleadoModel)

export default categoriaModel;