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
}, {
    timestamps: true
})

categoriaModel.hasMany(productoModel,{
    foreignKey: 'categoriaId',
    sourceKey: 'id'
})

productoModel.belongsTo(categoriaModel,{
    foreignKey: 'categoriaId',
    targetKey: 'id'
})

empleadoModel.hasMany(productoModel,{
    foreignKey: 'empleadoId',
    sourceKey: 'id'
})

productoModel.belongsTo(empleadoModel,{
    foreignKey: 'empleadoId',
    targetKey: 'id'
})

export default productoModel;