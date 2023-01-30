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
})

productoModel.hasMany(detalleProductoModel, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})

detalleProductoModel.belongsTo(productoModel)

temporadaModel.hasMany(detalleProductoModel, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})

detalleProductoModel.belongsTo(temporadaModel)

tallaModel.hasMany(detalleProductoModel, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})

detalleProductoModel.belongsTo(tallaModel)

modeloModel.hasMany(detalleProductoModel, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})

detalleProductoModel.belongsTo(modeloModel)

generoModel.hasMany(detalleProductoModel, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})

detalleProductoModel.belongsTo(generoModel)

colorModel.hasMany(detalleProductoModel, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})

detalleProductoModel.belongsTo(colorModel)

proveedorModel.hasMany(detalleProductoModel, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})

detalleProductoModel.belongsTo(proveedorModel)

export default detalleProductoModel;