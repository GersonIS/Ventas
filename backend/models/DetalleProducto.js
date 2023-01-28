import { DataTypes } from "sequelize";
import db from "../db/db.js";
import colorModel from "./Color.js";
import generoModel from "./Genero.js";
import modeloModel from "./Modelo.js";
import productoModel from "./Producto.js";
import proveedorModel from "./Proveedor.js";
import tallaModel from "./Talla.js";
import temporadaModel from "./Temporada.js";

const detalleProductoModel = db.define('detalle_producto', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    precio: {
        type: DataTypes.DECIMAL(8, 2),
        allowNull: false
    }
}, {
    timestamps: true
})

productoModel.hasMany(detalleProductoModel,{
    foreignKey: 'productoId',
    sourceKey: 'id'
})

detalleProductoModel.belongsTo(productoModel,{
    foreignKey: 'productoId',
    targetKey: 'id'
})

temporadaModel.hasMany(detalleProductoModel,{
    foreignKey: 'temporadaId',
    sourceKey: 'id'
})

detalleProductoModel.belongsTo(temporadaModel,{
    foreignKey: 'temporadaId',
    targetKey: 'id'
})

tallaModel.hasMany(detalleProductoModel,{
    foreignKey: 'tallaId',
    sourceKey: 'id'
})

detalleProductoModel.belongsTo(tallaModel,{
    foreignKey: 'tallaId',
    targetKey: 'id'
})

modeloModel.hasMany(detalleProductoModel,{
    foreignKey: 'modeloId',
    sourceKey: 'id'
})

detalleProductoModel.belongsTo(modeloModel,{
    foreignKey: 'modeloId',
    targetKey: 'id'
})

generoModel.hasMany(detalleProductoModel,{
    foreignKey: 'generoId',
    sourceKey: 'id'
})

detalleProductoModel.belongsTo(generoModel,{
    foreignKey: 'generoId',
    targetKey: 'id'
})

colorModel.hasMany(detalleProductoModel,{
    foreignKey: 'colorId',
    sourceKey: 'id'
})

detalleProductoModel.belongsTo(colorModel,{
    foreignKey: 'colorId',
    targetKey: 'id'
})

proveedorModel.hasMany(detalleProductoModel,{
    foreignKey: 'proveedorId',
    sourceKey: 'id'
})

detalleProductoModel.belongsTo(proveedorModel,{
    foreignKey: 'proveedorId',
    targetKey: 'id'
})

export default detalleProductoModel;