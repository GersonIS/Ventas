import { DataTypes } from "sequelize";
import db from "../db/db.js";
import categoriaModel from "./Categoria.js";
import empleadoModel from "./Empleado.js";

const productoModel = db.define('productos', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    codigo: {
        type: DataTypes.STRING(8),
        allowNull: false,
        unique: true
    },
    producto: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING(60),
        allowNull: true
    }
})

categoriaModel.hasMany(productoModel, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})

productoModel.belongsTo(categoriaModel)

empleadoModel.hasMany(productoModel, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})

productoModel.belongsTo(empleadoModel)

export default productoModel;