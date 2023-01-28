import { DataTypes } from "sequelize";
import db from "../db/db.js";
import detalleProductoModel from "./DetalleProducto";
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

ventaModel.hasMany(productoVentaModel,{
    foreignKey: 'ventaId',
    sourceKey: 'id'
})

productoVentaModel.belongsTo(ventaModel,{
    foreignKey: 'ventaId',
    targetKey: 'id'
})

detalleProductoModel.hasMany(productoVentaModel,{
    foreignKey: 'detalleProductoId',
    sourceKey: 'id'
})

productoVentaModel.belongsTo(detalleProductoModel,{
    foreignKey: 'detalleProductoId',
    targetKey: 'id'
})

export default productoVentaModel;