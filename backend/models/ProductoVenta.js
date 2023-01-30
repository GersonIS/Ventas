import { DataTypes } from "sequelize";
import db from "../db/db.js";
import detalleProductoModel from "./DetalleProducto.js";
import ventaModel from "./Venta.js";

const productoVentaModel = db.define('producto_venta',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    cantidad: {
        type: DataTypes.INTEGER,
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

ventaModel.hasMany(productoVentaModel, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})

productoVentaModel.belongsTo(ventaModel)

detalleProductoModel.hasMany(productoVentaModel, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})

productoVentaModel.belongsTo(detalleProductoModel)

export default productoVentaModel;