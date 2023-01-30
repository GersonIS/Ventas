import { DataTypes } from "sequelize";
import db from "../db/db.js";
import compraModel from "./Compra.js";
import detalleProductoModel from "./DetalleProducto.js";

const compraProductoModel = db.define('compra_producto',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    precio_compra: {
        type: DataTypes.DECIMAL(8,2),
        allowNull: false
    },
    precio_venta: {
        type: DataTypes.DECIMAL(8,2),
        allowNull: false
    },
    descuento: {
        type: DataTypes.DECIMAL(8,2),
        allowNull: false
    },
    total: {
        type: DataTypes.DECIMAL(8,2),
        allowNull: false
    }
})

compraModel.hasMany(compraProductoModel, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})

compraProductoModel.belongsTo(compraModel)

detalleProductoModel.hasMany(compraProductoModel, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})

compraProductoModel.belongsTo(detalleProductoModel)

export default compraProductoModel;